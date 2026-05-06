// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Typography, Button } from "@mui/material";
// import ShieldIcon from "@mui/icons-material/Shield";
// import FlagIcon from "@mui/icons-material/Flag";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import StarIcon from "@mui/icons-material/Star";
// import heroImage from "../../../assets/hero.png";

// export default function AboutCleanFeed() {
//   const navigate = useNavigate();

//   const primary = "#2563eb";
//   const dark = "#0f172a";
//   const softBg = "#020617";
//   const cardBg = "#111827";
//   const lightText = "#cbd5f5";

//   return (
//     <Box sx={{ background: softBg, color: "#fff" }}>

//       {/* HERO */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           px: { xs: 3, md: 10 },
//           pt: 8,
//           pb: 6,
//           gap: 4,
//         }}
//       >
//         {/* LEFT */}
//         <Box sx={{ flex: 1 }}>
//           <Typography variant="h3" fontWeight={800}>
//             About <span style={{ color: primary }}>CleanFeed</span>
//           </Typography>

//           <Typography sx={{ mt: 2, fontSize: 16, maxWidth: 500, color: lightText }}>
//             CleanFeed is a modern content platform where users can create posts,
//             interact, and build trust. It ensures platform safety using a smart
//             reporting system combined with automated moderation.
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{ mt: 3, px: 4, py: 1.2, borderRadius: "999px" }}
//             onClick={() => navigate("/HomeFeed")}
//           >
//             Go to Feed
//           </Button>
//         </Box>

//         {/* RIGHT IMAGE (UPDATED ONLY THIS PART) */}
//         <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
//   <Box
//     component="img"
//     src={heroImage}
//     alt="CleanFeed preview"
//     sx={{
//       width: "100%",
//       maxWidth: 420,
//       borderRadius: 4,

//       // 🔥 KEY FIXES
//       mixBlendMode: "lighten",
//       opacity: 0.95,

//       // remove hard edges feel
//       boxShadow: "0 30px 80px rgba(0,0,0,0.6)",

//       transition: "0.3s ease",
//       '&:hover': {
//         transform: "scale(1.03)",
//       }
//     }}
//   />
// </Box>
//       </Box>

//       {/* CORE FEATURES */}
//       <Box sx={{ px: { xs: 3, md: 10 }, py: 8 }}>
//         <Typography variant="h4" fontWeight={700} textAlign="center">
//           Core Features
//         </Typography>

//         <Box
//           sx={{
//             mt: 5,
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: 3,
//           }}
//         >
//           {[
//             {
//               icon: <AddCircleIcon sx={{ fontSize: 30, color: primary }} />,
//               title: "Create Posts",
//               desc: "Share content easily with the community",
//             },
//             {
//               icon: <FlagIcon sx={{ fontSize: 30, color: primary }} />,
//               title: "Report System",
//               desc: "Report harmful or inappropriate posts",
//             },
//             {
//               icon: <ShieldIcon sx={{ fontSize: 30, color: primary }} />,
//               title: "Auto Moderation",
//               desc: "System flags posts after threshold",
//             },
//             {
//               icon: <VisibilityIcon sx={{ fontSize: 30, color: primary }} />,
//               title: "Admin Control",
//               desc: "Admins review and take actions",
//             },
//             {
//               icon: <StarIcon sx={{ fontSize: 30, color: primary }} />,
//               title: "Trust Score",
//               desc: "Users build credibility over time",
//             },
//           ].map((item, i) => (
//             <Box
//               key={i}
//               sx={{
//                 width: 240,
//                 p: 3,
//                 borderRadius: 3,
//                 background: cardBg,
//                 textAlign: "center",
//                 transition: "0.25s",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                 },
//               }}
//             >
//               {item.icon}
//               <Typography sx={{ mt: 1.5, fontWeight: 600, fontSize: 15 }}>
//                 {item.title}
//               </Typography>
//               <Typography sx={{ mt: 0.5, fontSize: 13, color: lightText }}>
//                 {item.desc}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       {/* NEW SECTION */}
//       <Box
//         sx={{
//           px: { xs: 3, md: 10 },
//           py: 8,
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           gap: 6,
//           background: dark,
//         }}
//       >
//         <Box sx={{ flex: 1 }}>
//           <Typography variant="h4" fontWeight={700}>
//             Built for Real Platforms
//           </Typography>

//           <Typography sx={{ mt: 2, color: lightText }}>
//             CleanFeed is designed for modern applications where user-generated
//             content needs to be managed efficiently.
//           </Typography>
//         </Box>

//         <Box sx={{ flex: 1 }}>
//           <Box
//             sx={{
//               p: 4,
//               borderRadius: 4,
//               background: cardBg,
//             }}
//           >
//             <Typography fontWeight={600}>Key Benefits</Typography>
//             <Typography sx={{ mt: 1, color: lightText }}>
//               • Faster moderation
//             </Typography>
//             <Typography sx={{ color: lightText }}>
//               • Reduced admin workload
//             </Typography>
//             <Typography sx={{ color: lightText }}>
//               • Better content quality
//             </Typography>
//             <Typography sx={{ color: lightText }}>
//               • Trust-based ecosystem
//             </Typography>
//           </Box>
//         </Box>
//       </Box>

//       {/* CTA */}
//       <Box sx={{ textAlign: "center", py: 8 }}>
//         <Typography variant="h4" fontWeight={700}>
//           Experience CleanFeed
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{ mt: 3, px: 5, py: 1.2, borderRadius: "999px" }}
//           onClick={() => navigate("/Login")}
//         >
//           Get Started
//         </Button>
//       </Box>
//     </Box>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button
} from "@mui/material";

import ShieldIcon from "@mui/icons-material/Shield";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import heroImage from "../../../assets/hero.png";

export default function AboutCleanFeed() {

  const navigate = useNavigate();

  const primary = "#3b82f6";
  const secondary = "#8b5cf6";

  const dark = "#020617";

  const cardBg = "rgba(255,255,255,0.05)";

  const lightText = "#cbd5e1";

  const features = [

    {
      icon: <AddCircleIcon sx={{ fontSize: 34 }} />,
      title: "Create Posts",
      desc: "Share content easily with the community",
    },

    {
      icon: <FlagIcon sx={{ fontSize: 34 }} />,
      title: "Report System",
      desc: "Report harmful or inappropriate posts",
    },

    {
      icon: <ShieldIcon sx={{ fontSize: 34 }} />,
      title: "Auto Moderation",
      desc: "System flags posts after threshold",
    },

    {
      icon: <VisibilityIcon sx={{ fontSize: 34 }} />,
      title: "Admin Control",
      desc: "Admins review and take actions",
    },

    {
      icon: <StarIcon sx={{ fontSize: 34 }} />,
      title: "Trust Score",
      desc: "Users build credibility over time",
    },
  ];

  return (

    <Box

      sx={{

        background: `
          radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 25%),
          radial-gradient(circle at top right, rgba(139,92,246,0.16), transparent 25%),
          linear-gradient(180deg, #020617 0%, #0f172a 100%)
        `,

        color: "#fff",

        overflow: "hidden"
      }}
    >

      {/* HERO SECTION */}

      <Box

        sx={{

          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row"
          },

          alignItems: "center",

          justifyContent: "space-between",

          px: {
            xs: 3,
            md: 10
          },

          pt: {
            xs: 6,
            md: 10
          },

          pb: 8,

          gap: 6,

          position: "relative",
        }}
      >

        {/* LEFT */}

        <Box sx={{ flex: 1 }}>

          <Box

            sx={{

              display: "inline-flex",

              alignItems: "center",

              gap: 1,

              px: 2,
              py: 0.7,

              mb: 2.5,

              borderRadius: "999px",

              background: "rgba(59,130,246,0.12)",

              border: "1px solid rgba(96,165,250,0.18)",

              color: "#93c5fd",

              fontSize: "13px",

              fontWeight: 600
            }}
          >
            SAFE • MODERN • TRUSTED
          </Box>

          <Typography

            variant="h2"

            sx={{

              fontWeight: 900,

              lineHeight: 1.1,

              fontSize: {
                xs: "42px",
                md: "64px"
              },

              letterSpacing: "-0.04em"
            }}
          >
            About{" "}

            <span

              style={{

                background:
                  "linear-gradient(90deg,#60a5fa,#8b5cf6)",

                WebkitBackgroundClip: "text",

                WebkitTextFillColor: "transparent"
              }}
            >
              CleanFeed
            </span>

          </Typography>

          <Typography

            sx={{

              mt: 3,

              maxWidth: 580,

              fontSize: {
                xs: "15px",
                md: "17px"
              },

              lineHeight: 1.9,

              color: lightText
            }}
          >
            CleanFeed is a modern content platform where users can create posts,
            interact, and build trust through a secure moderation ecosystem.
            The platform combines reporting systems and automated moderation
            to create a safer and more reliable community experience.
          </Typography>

          {/* BUTTONS */}

          <Box

            sx={{
              display: "flex",
              gap: 2,
              mt: 4,
              flexWrap: "wrap"
            }}
          >

            <Button

              variant="contained"

              endIcon={<ArrowForwardRoundedIcon />}

              onClick={() => navigate("/HomeFeed")}

              sx={{

                px: 4,
                py: 1.4,

                borderRadius: "16px",

                textTransform: "none",

                fontWeight: 700,

                fontSize: "15px",

                background:
                  "linear-gradient(135deg,#3b82f6,#8b5cf6)",

                boxShadow:
                  "0 15px 35px rgba(59,130,246,0.35)",

                '&:hover': {

                  transform: "translateY(-2px)",

                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)"
                }
              }}
            >
              Explore Feed
            </Button>

            <Button

              variant="outlined"

              onClick={() => navigate("/Login")}

              sx={{

                px: 4,
                py: 1.4,

                borderRadius: "16px",

                textTransform: "none",

                fontWeight: 700,

                borderColor: "rgba(255,255,255,0.14)",

                color: "#fff",

                '&:hover': {

                  borderColor: "#60a5fa",

                  background: "rgba(255,255,255,0.04)"
                }
              }}
            >
              Get Started
            </Button>

          </Box>

        </Box>

        {/* RIGHT IMAGE */}

        <Box

          sx={{

            flex: 1,

            display: "flex",

            justifyContent: "center",

            position: "relative",
          }}
        >

          {/* GLOW */}

          <Box

            sx={{

              position: "absolute",

              width: 340,
              height: 340,

              borderRadius: "50%",

              background:
                "radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)",

              filter: "blur(30px)",

              zIndex: 0,
            }}
          />

          <Box

            component="img"

            src={heroImage}

            alt="CleanFeed Preview"

            sx={{

              width: "100%",

              maxWidth: 480,

              position: "relative",

              zIndex: 1,

              borderRadius: "30px",

              border: "1px solid rgba(255,255,255,0.08)",

              background: "rgba(255,255,255,0.03)",

              backdropFilter: "blur(12px)",

              boxShadow: `
                0 30px 80px rgba(0,0,0,0.5),
                0 0 50px rgba(59,130,246,0.15)
              `,

              transition: "0.35s ease",

              '&:hover': {

                transform: "translateY(-6px) scale(1.02)"
              }
            }}
          />

        </Box>

      </Box>

      {/* FEATURES */}

      <Box

        sx={{
          px: { xs: 3, md: 10 },
          py: 8
        }}
      >

        <Typography

          variant="h3"

          sx={{

            textAlign: "center",

            fontWeight: 800,

            mb: 1
          }}
        >
          Core Features
        </Typography>

        <Typography

          sx={{
            textAlign: "center",
            color: lightText,
            mb: 6
          }}
        >
          Powerful moderation and community tools designed for modern platforms
        </Typography>

        <Box

          sx={{

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(5,1fr)"
            },

            gap: 3
          }}
        >

          {features.map((item, i) => (

            <Box

              key={i}

              sx={{

                p: 3,

                borderRadius: "24px",

                background: cardBg,

                border: "1px solid rgba(255,255,255,0.06)",

                backdropFilter: "blur(14px)",

                textAlign: "center",

                transition: "0.3s ease",

                '&:hover': {

                  transform: "translateY(-8px)",

                  border: "1px solid rgba(96,165,250,0.22)",

                  boxShadow:
                    "0 20px 40px rgba(59,130,246,0.12)"
                }
              }}
            >

              <Box

                sx={{

                  width: 68,
                  height: 68,

                  borderRadius: "18px",

                  margin: "0 auto",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  background:
                    "linear-gradient(135deg,#3b82f6,#8b5cf6)",

                  boxShadow:
                    "0 10px 24px rgba(59,130,246,0.25)",
                }}
              >
                {item.icon}
              </Box>

              <Typography

                sx={{

                  mt: 2.2,

                  fontWeight: 700,

                  fontSize: "17px"
                }}
              >
                {item.title}
              </Typography>

              <Typography

                sx={{

                  mt: 1,

                  fontSize: "14px",

                  lineHeight: 1.8,

                  color: lightText
                }}
              >
                {item.desc}
              </Typography>

            </Box>

          ))}

        </Box>

      </Box>

      {/* BENEFITS SECTION */}

      <Box

        sx={{

          px: {
            xs: 3,
            md: 10
          },

          py: 8,

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1.1fr 0.9fr"
          },

          gap: 5,

          alignItems: "center"
        }}
      >

        {/* LEFT */}

        <Box>

          <Typography

            variant="h3"

            sx={{
              fontWeight: 800
            }}
          >
            Built for Real Platforms
          </Typography>

          <Typography

            sx={{

              mt: 3,

              color: lightText,

              lineHeight: 2,

              fontSize: "15px",

              maxWidth: 650
            }}
          >
            CleanFeed is designed for modern applications where
            user-generated content needs moderation, trust-building,
            transparency, and scalable management tools.
          </Typography>

        </Box>

        {/* RIGHT */}

        <Box

          sx={{

            p: 4,

            borderRadius: "28px",

            background: cardBg,

            border: "1px solid rgba(255,255,255,0.06)",

            backdropFilter: "blur(16px)",

            boxShadow:
              "0 20px 50px rgba(0,0,0,0.28)"
          }}
        >

          <Typography

            sx={{
              fontWeight: 700,
              fontSize: "22px",
              mb: 2
            }}
          >
            Key Benefits
          </Typography>

          {[
            "Faster moderation workflow",
            "Reduced admin workload",
            "Better content quality",
            "Trust-based ecosystem",
            "Modern scalable architecture"
          ].map((item, index) => (

            <Box

              key={index}

              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2
              }}
            >

              <Box

                sx={{

                  width: 10,
                  height: 10,

                  borderRadius: "50%",

                  background:
                    "linear-gradient(135deg,#3b82f6,#8b5cf6)"
                }}
              />

              <Typography
                sx={{ color: lightText }}
              >
                {item}
              </Typography>

            </Box>

          ))}

        </Box>

      </Box>

      {/* CTA */}

      <Box

        sx={{

          textAlign: "center",

          py: 10,

          px: 2
        }}
      >

        <Typography

          variant="h3"

          sx={{
            fontWeight: 800
          }}
        >
          Experience CleanFeed
        </Typography>

        <Typography

          sx={{
            mt: 2,
            color: lightText
          }}
        >
          Join a safer and smarter social content platform
        </Typography>

        <Button

          variant="contained"

          onClick={() => navigate("/Login")}

          sx={{

            mt: 4,

            px: 5,
            py: 1.5,

            borderRadius: "18px",

            textTransform: "none",

            fontWeight: 700,

            fontSize: "15px",

            background:
              "linear-gradient(135deg,#3b82f6,#8b5cf6)",

            boxShadow:
              "0 15px 35px rgba(59,130,246,0.35)",

            '&:hover': {

              transform: "translateY(-2px)",

              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)"
            }
          }}
        >
          Get Started
        </Button>

      </Box>

    </Box>
  );
}