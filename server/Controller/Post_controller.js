const posttable = require("../Models/Post_model")
const usertable = require("../Models/User_model")


const addpost = async (req, res) => {
  try {
    const { title, description, categoryId } = req.body;
    const pimage = req.file ? req.file.filename : null

    const postdetails = new posttable({
      title,
      description,
      categoryId,
      userId: req.userid,
      postimage: pimage
    })

    await postdetails.save();
    console.log(req.userid)
    res.status(201).json({
      message: "post added successfully",
      pdata: postdetails
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "server error", error })
  }
}

const getpost = async (req, res) => {
  try {
    const getallpost = await posttable
      .find()
      .populate("categoryId")
      .populate("userId", "name")
      .sort({ createdAt: -1 })
    console.log(getallpost)

    res.status(200).json({
      message: "post fetched",
      allposts: getallpost
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "server error", error })
  }
}

const getpostbyid = async (req, res) => {
  try {
    const pid = req.params.id
    const postbyid = await posttable.findById(pid)
    console.log(postbyid)

    res.status(200).json({
      message: "post found",
      byid: postbyid
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "server error", error })
  }
}

// const deletepost = async (req, res) => {
//   try {
//     const d_id = req.params.id
//     const deletepost = await posttable.findByIdAndDelete(d_id)
//     console.log(deletepost)

//     res.status(200).json({
//       message: "post deleted",
//       d_post: deletepost
//     })

//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "server error", error })
//   }
// }

const deletepost = async (req, res) => {
  try {
    const d_id = req.params.id

    const post = await posttable.findById(d_id)

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      })
    }

    await usertable.findByIdAndUpdate(
      post.userId,
      { $inc: { trustScore: -5 } }
    )

    await posttable.findByIdAndDelete(d_id)

    res.status(200).json({
      message: "Post deleted and trust score reduced"
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Server error"
    })
  }
}

const updatepost = async (req, res) => {
  try {
    const { id } = req.params

    const body = req.file
      ? { ...req.body, postimage: req.file.filename }
      : req.body

    const updatedpost = await posttable.findByIdAndUpdate(id, body, { new: true })

    res.status(200).json({ message: "post updated", updatedata: updatedpost })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "server error", error })
  }
}

const getMyPosts = async (req, res) => {
  try {
    const posts = await posttable.find({ userId: req.userid })
      .sort({ createdAt: -1 })
      .populate("categoryId")
      .populate("userId", "name");

    res.status(200).json({
      message: "my posts fetched",
      myposts: posts
    });

  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
}

const reportPost = async (req, res) => {
  try {
    const { reason } = req.body
    const userId = String(req.userid)

    const updatedPost = await posttable.findOneAndUpdate(
      {
        _id: req.params.id,
        reportedBy: { $nin: [userId] }
      },
      {
        $addToSet: { reportedBy: userId },
        $inc: { reportCount: 1 },
        ...(reason ? { $push: { reportReasons: reason } } : {})
      },
      { new: true }
    )

    if (!updatedPost) {
      return res.status(400).json({
        message: "You already reported this post"
      })
    }

    if (updatedPost.reportCount >= 2 && !updatedPost.isFlagged) {
      updatedPost.isFlagged = true
      await updatedPost.save()
    }

    res.status(200).json({
      message: "Reported successfully"
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Server error"
    })
  }
}

const getReports = async (req, res) => {
  try {

    const posts = await posttable.find({
      reportCount: { $gt: 0 }
    })
      .populate("userId", "name trustScore")
      .sort({ reportCount: -1 })

    res.status(200).json({
      message: "Reported posts fetched",
      reportposts: posts
    })

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error
    })
  }
}
module.exports = { addpost, getpost, getpostbyid, deletepost, updatepost, getMyPosts, reportPost, getReports }