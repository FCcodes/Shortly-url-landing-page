import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

//react
import { useState, useEffect } from "react"

//material-ui
import {
  Box,
  Paper,
  Grid,
  Avatar,
  Typography,
  Button,
  AppBar,
  Toolbar,
  TextField,
} from "@mui/material"

export default function Home() {
  const [error, setError] = useState(false)
  const [input, setInput] = useState("")

  return (
    <>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="div" className="container">
        <AppBar
          position="relative"
          sx={{
            p: 0,
            mb: { tablet: 10 },
            px: { phone: 5, laptop: 10 },
            backgroundColor: "white",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ color: "black" }}>
            <Typography
              variant="subtitle1"
              sx={{
                letterSpacing: "2px",
                fontSize: { laptop: "1.3rem" },
                fontWeight: 600,
                flexGrow: { phone: 1, laptop: "0.1" },
              }}
            >
              Shortly
            </Typography>

            <Box
              component="nav"
              className="navLinks"
              sx={{
                display: { phone: "none", laptop: "flex" },
                flexGrow: { laptop: 1 },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  mx: { tablet: 1, laptop: 2 },
                  letterSpacing: "1px",
                  color: "grey.400",
                  fontWeight: 600,
                }}
              >
                <Link href="/">
                  <a>Features</a>
                </Link>
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  mx: { tablet: 1, laptop: 2 },
                  letterSpacing: "1px",
                  color: "grey.400",
                  fontWeight: 600,
                }}
              >
                <Link href="/">
                  <a>Pricing</a>
                </Link>
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  mx: { tablet: 1, laptop: 2 },
                  letterSpacing: "1px",
                  color: "grey.400",
                  fontWeight: 600,
                }}
              >
                <Link href="/">
                  <a>Resources</a>
                </Link>
              </Typography>
            </Box>

            <Box
              className="signUpButtons"
              sx={{ display: { phone: "none", tablet: "flex" } }}
            >
              <Button sx={{ mx: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: { tablet: ".8rem" }, fontWeight: 400 }}
                >
                  Login
                </Typography>
              </Button>

              <Button variant="contained" sx={{ mx: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: { tablet: ".8rem" }, fontWeight: 400 }}
                >
                  SignUp
                </Typography>
              </Button>
            </Box>

            <Box
              component="svg"
              className="hamburger"
              sx={{
                ml: 3,
                display: { phone: "initial", laptop: "none" },
                width: "5vw",
                height: "5vw",
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          component="header"
          sx={{ mb: { phone: 10, tablet: 13 }, px: { phone: 5, laptop: 10 } }}
        >
          <Grid
            container
            sx={{ flexDirection: { phone: "column-reverse", tablet: "row" } }}
          >
            <Grid
              item
              phone={12}
              tablet={7}
              sx={{ m: 0, my: "auto", mx: "auto" }}
            >
              <Paper
                elevation={0}
                sx={{ mx: "auto", maxWidth: { tablet: "80%", laptop: "80%" } }}
              >
                <Typography variant="h1" sx={{ mb: 3 }}>
                  More than just shorter links
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mb: 3, maxWidth: { laptop: "50%" } }}
                >
                  Build your brand&apos;s recognition and get detailed insights
                  on how your links are performing.
                </Typography>

                <Button variant="contained">Get Started</Button>
              </Paper>
            </Grid>

            <Grid
              item
              phone={12}
              tablet={5}
              sx={{ p: 2, mb: { phone: 3, laptop: 0 }, my: "auto" }}
            >
              <Box
                component="img"
                src="./illustration-working.svg"
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box component="main" sx={{ px: { tablet: 5, laptop: 10 } }}>
          <Grid
            container
            component="section"
            className="addLink"
            sx={{
              p: 5,
              mb: 10,
              backgroundColor: "rgb(54, 0, 85)",
              borderRadius: { phone: 0, laptop: "10px" },
            }}
          >
            <Grid
              item
              phone={12}
              tablet={6}
              laptop={9}
              sx={{ mb: { phone: 3, tablet: 0 } }}
            >
              <TextField
                error={error}
                //value={input}
                fullWidth
                label="Shorten a link hero"
              />
            </Grid>

            <Grid
              item
              phone={12}
              tablet={5}
              laptop={2}
              sx={{ mx: "auto", ml: { tablet: 1, laptop: 4 }, mt: 1 }}
            >
              <Button variant="contained" sx={{ mx: "auto", display: "block" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { tablet: ".8rem", laptop: "1rem" },
                    fontWeight: 400,
                  }}
                >
                  Shorten It!
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            component="section"
            className="features"
            sx={{ mb: 10, px: { phone: 6, tablet: 0 } }}
          >
            <Grid item phone={12}>
              <Paper
                elevation={0}
                sx={{
                  mx: "auto",
                  mb: 10,
                  maxWidth: { tablet: "65%", laptop: "50%" },
                }}
              >
                <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                  Advanced Statistics
                </Typography>

                <Typography variant="body2" align="center">
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
                </Typography>
              </Paper>
            </Grid>

            <Grid
              item
              phone={12}
              laptop={4}
              className="infoCard"
              sx={{ mb: 8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  mx: "auto",
                  mb: 5,
                  maxWidth: { phone: "80%", tablet: "40%", laptop: "70%" },
                }}
              >
                <Avatar
                  sx={{
                    mb: 4,
                    mx: "auto",
                    p: 2,
                    width: { phone: "15vw", tablet: "10vw", laptop: "7vw" },
                    height: { phone: "15vw", tablet: "10vw", laptop: "7vw" },
                    backgroundColor: "rgb(54, 0, 85)",
                  }}
                  src="./icon-brand-recognition.svg"
                />

                <Typography variant="h3" align="center" sx={{ mb: 2 }}>
                  Brand Recognition
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  Boost your brand recognition with each click. Generic links
                  don&apos;t mean a thing. Branded links help instil confidence
                  in your brand.
                </Typography>
              </Paper>
            </Grid>

            <Grid
              item
              phone={12}
              laptop={4}
              className="infoCard"
              sx={{ mb: 8, mt: { laptop: 5 } }}
            >
              <Paper
                elevation={0}
                sx={{
                  mx: "auto",
                  mb: 5,
                  maxWidth: { phone: "80%", tablet: "40%", laptop: "70%" },
                }}
              >
                <Avatar
                  sx={{
                    mb: 4,
                    mx: "auto",
                    p: 2,
                    width: { phone: "15vw", tablet: "10vw", laptop: "7vw" },
                    height: { phone: "15vw", tablet: "10vw", laptop: "7vw" },
                    backgroundColor: "rgb(54, 0, 85)",
                  }}
                  src="./icon-detailed-records.svg"
                />

                <Typography variant="h3" align="center" sx={{ mb: 2 }}>
                  Detailed Records
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </Typography>
              </Paper>
            </Grid>

            <Grid
              item
              phone={12}
              laptop={4}
              className="infoCard"
              sx={{ mb: 8, mt: { laptop: 10 } }}
            >
              <Paper
                elevation={0}
                sx={{
                  mx: "auto",
                  mb: 5,
                  maxWidth: { phone: "80%", tablet: "40%", laptop: "70%" },
                }}
                
              >
                <Avatar
                  sx={{
                    mb: 4,
                    mx: "auto",
                    p: 2,
                    width: { phone: "15vw", tablet: "10vw", laptop: "6vw" },
                    height: { phone: "15vw", tablet: "10vw", laptop: "6vw" },
                    backgroundColor: "rgb(54, 0, 85)",
                  }}
                  src="./icon-fully-customizable.svg"
                />

                <Typography variant="h3" align="center" sx={{ mb: 2 }}>
                  Fully Customizable
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audiences engagement.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid
            container
            component="section"
            className="callToAction"
            sx={{ backgroundColor: "rgb(54, 0, 85)" }}
          >
            <Grid item phone={12} sx={{ background: "none" }}>
              <Paper
                elevation={0}
                sx={{
                  py: 5,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: { laptop: "50%" },
                  background: "none",
                  color: "white",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ mb: 2, textAlign: { phone: "center" } }}
                >
                  Boost your links today
                </Typography>

                <Button variant="contained" sx={{ boxShadow: "none" }}>
                  Get Started
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Box>
    </>
  )
}
