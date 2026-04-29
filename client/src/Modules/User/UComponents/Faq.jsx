// import React from "react";
// import {
//   Box,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Container,
//   Paper
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function Faq() {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#f4f6f9",
//         py: 6
//       }}
//     >
//       <Container maxWidth="md">

//         <Paper
//           elevation={4}
//           sx={{
//             p: { xs: 3, md: 5 },
//             borderRadius: "18px",
//             background: "#ffffff",
//             border: "1px solid #e5e7eb"
//           }}
//         >

//           {/* Heading */}
//           <Typography
//             variant="h4"
//             sx={{
//               textAlign: "center",
//               fontWeight: 700,
//               color: "#0f172a",
//               mb: 1
//             }}
//           >
//             Frequently Asked Questions
//           </Typography>

//           <Typography
//             sx={{
//               textAlign: "center",
//               color: "#64748b",
//               mb: 4
//             }}
//           >
//             Everything you need to know about our platform.
//           </Typography>

//           {/* FAQ 1 */}
//           <Accordion
//             sx={{
//               mb: 2,
//               borderRadius: "12px",
//               boxShadow: "none",
//               border: "1px solid #e5e7eb",
//               "&:before": { display: "none" }
//             }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
//               <Typography fontWeight="600">
//                 What is this website about?
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography color="text.secondary">
//                 This platform allows users to create, explore, and interact with
//                 posts in a secure and engaging environment.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* FAQ 2 */}
//           <Accordion
//             sx={{
//               mb: 2,
//               borderRadius: "12px",
//               boxShadow: "none",
//               border: "1px solid #e5e7eb",
//               "&:before": { display: "none" }
//             }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
//               <Typography fontWeight="600">
//                 Why should I use this platform?
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography color="text.secondary">
//                 It helps users share ideas, discover useful content, and connect
//                 through a clean and moderated system.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* FAQ 3 */}
//           <Accordion
//             sx={{
//               mb: 2,
//               borderRadius: "12px",
//               boxShadow: "none",
//               border: "1px solid #e5e7eb",
//               "&:before": { display: "none" }
//             }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
//               <Typography fontWeight="600">
//                 Can I create my own posts?
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography color="text.secondary">
//                 Yes, registered users can create posts with text and images.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* FAQ 4 */}
//           <Accordion
//             sx={{
//               mb: 2,
//               borderRadius: "12px",
//               boxShadow: "none",
//               border: "1px solid #e5e7eb",
//               "&:before": { display: "none" }
//             }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
//               <Typography fontWeight="600">
//                 Can I report unwanted content?
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography color="text.secondary">
//                 Yes, users can report spam or inappropriate posts for review.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* FAQ 5 */}
//           <Accordion
//             sx={{
//               mb: 2,
//               borderRadius: "12px",
//               boxShadow: "none",
//               border: "1px solid #e5e7eb",
//               "&:before": { display: "none" }
//             }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
//               <Typography fontWeight="600">
//                 Are new posts shown first?
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography color="text.secondary">
//                 Yes, the latest posts appear first in the home feed.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* FAQ 6 */}
//           <Accordion
//             sx={{
//               borderRadius: "12px",
//               boxShadow: "none",
//               border: "1px solid #e5e7eb",
//               "&:before": { display: "none" }
//             }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color:"#1e40af" }} />}>
//               <Typography fontWeight="600">
//                 Is my account secure?
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography color="text.secondary">
//                 Yes, secure authentication is used to protect accounts and user data.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//         </Paper>

//       </Container>
//     </Box>
//   );
// }

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
  const faqData = [
    {
      question: "What is this website about?",
      answer:
        "This platform allows users to create, explore, and interact with posts in a secure and moderated environment."
    },
    {
      question: "Why should I use this platform?",
      answer:
        "It helps users share ideas, discover useful content, and connect through a clean reporting system."
    },
    {
      question: "Can I create my own posts?",
      answer:
        "Yes, registered users can create posts with images and descriptions."
    },
    {
      question: "Can I report unwanted content?",
      answer:
        "Yes, users can report spam, fake, or inappropriate posts for admin review."
    },
    {
      question: "Are new posts shown first?",
      answer:
        "Yes, the latest posts are displayed first in the home feed."
    },
    {
      question: "Is my account secure?",
      answer:
        "Yes, secure authentication is used to protect user accounts and data."
    }
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top right, rgba(124,58,237,0.18), transparent 28%),
          radial-gradient(circle at bottom left, rgba(59,130,246,0.12), transparent 25%),
          linear-gradient(135deg,#0f172a,#111827,#1e1b4b)
        `,
        py: 6,
        px: 2
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: "24px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.35)"
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#ffffff",
              mb: 1
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#cbd5e1",
              mb: 4,
              fontSize: "15px"
            }}
          >
            Everything you need to know about our platform.
          </Typography>

          {/* FAQ Items */}
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: "16px !important",
                overflow: "hidden",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#ffffff",
                boxShadow: "none",
                "&:before": {
                  display: "none"
                },
                "&:hover": {
                  transform: "translateY(-2px)",
                  transition: "0.3s",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.18)"
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "#7c3aed" }} />
                }
                sx={{
                  minHeight: "58px"
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px"
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  pt: 0
                }}
              >
                <Typography
                  sx={{
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    fontSize: "14px"
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}