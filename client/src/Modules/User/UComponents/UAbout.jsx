import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarIcon from "@mui/icons-material/Star";
import heroImage from "../../../assets/hero.png";

export default function AboutCleanFeed() {
  const navigate = useNavigate();

  const primary = "#2563eb";
  const dark = "#0f172a";
  const softBg = "#020617";
  const cardBg = "#111827";
  const lightText = "#cbd5f5";

  return (
    <Box sx={{ background: softBg, color: "#fff" }}>

      {/* HERO */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, md: 10 },
          pt: 8,
          pb: 6,
          gap: 4,
        }}
      >
        {/* LEFT */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" fontWeight={800}>
            About <span style={{ color: primary }}>CleanFeed</span>
          </Typography>

          <Typography sx={{ mt: 2, fontSize: 16, maxWidth: 500, color: lightText }}>
            CleanFeed is a modern content platform where users can create posts,
            interact, and build trust. It ensures platform safety using a smart
            reporting system combined with automated moderation.
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3, px: 4, py: 1.2, borderRadius: "999px" }}
            onClick={() => navigate("/HomeFeed")}
          >
            Go to Feed
          </Button>
        </Box>

        {/* RIGHT IMAGE (UPDATED ONLY THIS PART) */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
  <Box
    component="img"
    src={heroImage}
    alt="CleanFeed preview"
    sx={{
      width: "100%",
      maxWidth: 420,
      borderRadius: 4,

      // 🔥 KEY FIXES
      mixBlendMode: "lighten",
      opacity: 0.95,

      // remove hard edges feel
      boxShadow: "0 30px 80px rgba(0,0,0,0.6)",

      transition: "0.3s ease",
      '&:hover': {
        transform: "scale(1.03)",
      }
    }}
  />
</Box>
      </Box>

      {/* CORE FEATURES */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 8 }}>
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Core Features
        </Typography>

        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {[
            {
              icon: <AddCircleIcon sx={{ fontSize: 30, color: primary }} />,
              title: "Create Posts",
              desc: "Share content easily with the community",
            },
            {
              icon: <FlagIcon sx={{ fontSize: 30, color: primary }} />,
              title: "Report System",
              desc: "Report harmful or inappropriate posts",
            },
            {
              icon: <ShieldIcon sx={{ fontSize: 30, color: primary }} />,
              title: "Auto Moderation",
              desc: "System flags posts after threshold",
            },
            {
              icon: <VisibilityIcon sx={{ fontSize: 30, color: primary }} />,
              title: "Admin Control",
              desc: "Admins review and take actions",
            },
            {
              icon: <StarIcon sx={{ fontSize: 30, color: primary }} />,
              title: "Trust Score",
              desc: "Users build credibility over time",
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                width: 240,
                p: 3,
                borderRadius: 3,
                background: cardBg,
                textAlign: "center",
                transition: "0.25s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              {item.icon}
              <Typography sx={{ mt: 1.5, fontWeight: 600, fontSize: 15 }}>
                {item.title}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: 13, color: lightText }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* NEW SECTION */}
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: 8,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
          background: dark,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            Built for Real Platforms
          </Typography>

          <Typography sx={{ mt: 2, color: lightText }}>
            CleanFeed is designed for modern applications where user-generated
            content needs to be managed efficiently.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              p: 4,
              borderRadius: 4,
              background: cardBg,
            }}
          >
            <Typography fontWeight={600}>Key Benefits</Typography>
            <Typography sx={{ mt: 1, color: lightText }}>
              • Faster moderation
            </Typography>
            <Typography sx={{ color: lightText }}>
              • Reduced admin workload
            </Typography>
            <Typography sx={{ color: lightText }}>
              • Better content quality
            </Typography>
            <Typography sx={{ color: lightText }}>
              • Trust-based ecosystem
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h4" fontWeight={700}>
          Experience CleanFeed
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3, px: 5, py: 1.2, borderRadius: "999px" }}
          onClick={() => navigate("/Login")}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}