import { Grid } from "@mui/material";
import "./detail.css";
import Image from "next/image";
import LOGO_2 from "../../public/amazon-logo.jpg";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function JobDetails() {
    return (
        <Grid container spacing={2} pt={2} pl={2}>
            <Grid xs={12} sm={12} md={12} p={2} sx={{ backgroundColor: "#ffffff", boxShadow: "0px 0px 10px 0px #f0f0f0", borderRadius: "15px" }}>
                <div className="DetailsInfoWrapper01">
                    <div className="detailsImageWrapper">
                        <Image className="details-logo-img" src={LOGO_2} alt="amazon logo" />
                    </div>
                    <div className="detailsTextWrapper">
                        <span>Sortitt</span>
                        <span>London, UK</span>
                    </div>
                    <div>
                    </div>

                </div>
                <Link href="#" className="detailsLink">www.sortitt.com</Link>
                <div className="detailsHiringInfoWrapper">
                    <div className="applyBtn1">
                        <button>Apply as a SEO Expert</button>
                        <ArrowForwardIcon style={{ color: "#ddffc4" }} className="arrowIcon" fontSize="small" />
                    </div>
                    <div className="applyBtn2">
                        <button>Apply as a Degital Marketer</button>
                        <ArrowForwardIcon style={{ color: "b8ffeb" }} className="arrowIcon" fontSize="small" />
                    </div>


                </div>
                <hr className="hrTracking" />
                <div className="detailsInfoListWrapper">
                    <ul>
                        <li><span>Department:</span><span>IT Department</span></li>
                        <li><span>Job Role:</span><span>Programmer</span></li>
                        <li><span>Work Type:</span><span>Remote</span></li>
                        <li><span>Salary:</span><span>$15/hr</span></li>
                        <li><span>Education:</span><span>Masters/SI</span></li>
                        <li><span>Job Type:</span><span>Full-Time (5 days)</span></li>
                        <li><span>Work Location:</span><span>Stratford, London</span></li>
                        <li><span>Contract Length:</span><span>3 Months</span></li>
                    </ul>
                </div>
                <div className="detailsDescriptionWrapper">
                    <h3>Job Descriptions</h3>
                    <h4>Job Title: SEO Expert</h4>
                    <p><span>Job Description:</span> Sortitt is seeking a skilled and detail-oriented SEO Expert to optimize our clients websites and digital presence. The ideal candidate will have a deep understanding of search engine algorithms, keyword strategies, and performance analysis to increase organic traffic and improve search rankings</p>

                    <h4>Responsibilities:</h4>
                    <ul>
                        <li>Conduct comprehensive strategies SEO audits and implement on page and off-page SEO strategies.</li>
                        <li>Perform keyword research and develop effective keyword strategies.</li>
                        <li>Analyze and evaluate website performance using SEO tools and analytics platforms, and provide actionable insights for improvement.</li>
                        <li>Collaborate with content creators and web developers to ensure SEO best practices are integrated into all content and site updates.</li>
                        <li>Monitor industry trends and stay up-to-date with changes in search engine algorithms to adapt strategies effectively.</li>
                        <li>Perform technical SEO audits to identify and resolve issues impacting site performance and search engine visibility.</li>
                        <li>Generate regular reports on SEO performance, including traffic, rankings, and other key metrics, to communicate results to stakeholders.</li>
                    </ul>

                </div>
            </Grid>
        </Grid>

    )
}