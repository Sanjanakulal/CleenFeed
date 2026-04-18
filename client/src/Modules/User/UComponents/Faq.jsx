import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f4f6f9",
        py: 6
      }}
    >
      <Container maxWidth="md">

        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: "18px",
            background: "#ffffff",
            border: "1px solid #e5e7eb"
          }}
        >

          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#0f172a",
              mb: 1
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#64748b",
              mb: 4
            }}
          >
            Everything you need to know about our platform.
          </Typography>

          {/* FAQ 1 */}
          <Accordion
            sx={{
              mb: 2,
              borderRadius: "12px",
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              "&:before": { display: "none" }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
              <Typography fontWeight="600">
                What is this website about?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                This platform allows users to create, explore, and interact with
                posts in a secure and engaging environment.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 2 */}
          <Accordion
            sx={{
              mb: 2,
              borderRadius: "12px",
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              "&:before": { display: "none" }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
              <Typography fontWeight="600">
                Why should I use this platform?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                It helps users share ideas, discover useful content, and connect
                through a clean and moderated system.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 3 */}
          <Accordion
            sx={{
              mb: 2,
              borderRadius: "12px",
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              "&:before": { display: "none" }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
              <Typography fontWeight="600">
                Can I create my own posts?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Yes, registered users can create posts with text and images.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 4 */}
          <Accordion
            sx={{
              mb: 2,
              borderRadius: "12px",
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              "&:before": { display: "none" }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
              <Typography fontWeight="600">
                Can I report unwanted content?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Yes, users can report spam or inappropriate posts for review.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 5 */}
          <Accordion
            sx={{
              mb: 2,
              borderRadius: "12px",
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              "&:before": { display: "none" }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
              <Typography fontWeight="600">
                Are new posts shown first?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Yes, the latest posts appear first in the home feed.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 6 */}
          <Accordion
            sx={{
              borderRadius: "12px",
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              "&:before": { display: "none" }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
              <Typography fontWeight="600">
                Is my account secure?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                Yes, secure authentication is used to protect accounts and user data.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Paper>

      </Container>
    </Box>
  );
}