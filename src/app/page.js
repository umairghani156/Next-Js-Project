"use client"
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import "./style.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { VscFilter } from "react-icons/vsc";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LOGO from "../../public/amazon-logo.jpg";
import { TbSmartHome } from "react-icons/tb";
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import { FaSackDollar } from "react-icons/fa6";
import { RiTimerLine } from "react-icons/ri";
import JobDetails from "@/components/page";



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function Home() {
  return (
    <Container >
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={12}>
          <div className="searchbar-container">
            <div className="searchbar-wrapper">
              <div className="role-wrapper">
                <SearchOutlinedIcon fontSize="small" style={{ color: "#363636" }} />
                <input type="text" className="role-input" placeholder="Freelance Role" />

              </div>
              <div className="place-wrapper">
                <LocationOnIcon fontSize="small" style={{ color: "#363636" }} />
                <input type="text" className="place-input" placeholder='City, state, zip code, or "remote"' />

              </div>
            </div>
            <button className="find-taks-btn">Find Tasks</button>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div className="sortedWrapper">
            <VscFilter />
            <p>Sorted By: Relevance</p>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} >
                  <Card sx={{ minWidth: 205, width:{md:"90%", xs:"100%", sm:"100%"} ,boxShadow:"0px 0px 10px 0px #f0f0f0",borderRadius:"15px"}}>
                    <CardContent>
                      <div className="imageWrapperContainer">
                        <div className="jobsInfoWrapper01">
                          <div className="imageWrapper">
                            <Image className="logo-img" src={LOGO} alt="amazon logo" />
                          </div>
                          <div className="textWrapper">
                            <span>Sortitt</span>
                            <span>London, UK</span>
                          </div>
                        </div>
                        <div className="jobsInfoWrapper">
                          <ul>
                            <li><TbSmartHome className="icon"/> <span>Remote</span></li>
                            <li><RiTimerLine  className="icon"/> <span>3 Months</span></li>
                            <li><FaSackDollar className="icon"/> <span>$15/hr</span></li>
                          </ul>

                        </div>

                      </div>
                      <Typography component="div">
                        <h3 className="hiringTitle">Hiring</h3>
                        <div className="hiringInfoWrapper">
                          <button>SEO Expert</button>
                          <button>Degital Marketing</button>

                        </div>
                       <div>

                       </div>
                       <div className="companyInfoWrapper">
                        <h3>Company Info</h3>
                        <p>
                          Sortitt is a HR Services Company HQed in the UK, with offices located in different parts of the world. They...<span className="learnMoreSpan">Learn More</span>
                        </p>
                        </div>
                        <div className="timeAndInfoWrapper">
                      <button className="learnMoreBtn">Learn More</button>
                      <span>46 minutes ago</span>
                      </div>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                <Card sx={{ minWidth: 205,width:{md:"90%", xs:"100%", sm:"100%"} ,boxShadow:"0px 0px 10px 0px #f0f0f0",border:"1px solid #fdb120",borderRadius:"15px"}}>
                    <CardContent>
                      <div className="imageWrapperContainer">
                        <div className="jobsInfoWrapper01">
                          <div className="imageWrapper">
                            <Image className="logo-img" src={LOGO} alt="amazon logo" />
                          </div>
                          <div className="textWrapper">
                            <span>Amazon</span>
                            <span>WA, USA</span>
                          </div>
                        </div>
                        <div className="jobsInfoWrapper">
                          <ul>
                            <li><TbSmartHome className="icon"/> <span>Remote</span></li>
                            <li><RiTimerLine  className="icon"/> <span>N/A</span></li>
                            <li><FaSackDollar className="icon"/> <span>$40/hr</span></li>
                          </ul>

                        </div>

                      </div>
                      <Typography component="div">
                        <h3 className="hiringTitle">Hiring</h3>
                        <div className="hiringInfoWrapper">
                          <button>UX Designer</button>
                          <button>React Developer</button>

                        </div>
                       <div>

                       </div>
                       <div className="companyInfoWrapper">
                        <h3>Company Info</h3>
                        <p>
                          Sortitt is a HR Services Company HQed in the UK, with offices located in different parts of the world. They ...<span className="learnMoreSpan">Learn More</span>
                        </p>
                        </div>
                        <div className="timeAndInfoWrapper">
                      <button className="learnMoreBtn">Learn More</button>
                      <span>46 minutes ago</span>
                      </div>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <JobDetails/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
