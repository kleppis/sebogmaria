import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import Bilde from "../assets/Bilde1.jpg";

const History = () => {
    return (
        <>
            <Navbar />
            <body className="md:px-40 innslag-screen bg-primary">
                <Navbar />
                <h1 className="text-center text-5xl pt-28 text-pinkDark">Vår historie</h1>
                <div className="flex">
                    <img src={Bilde} alt="" className="hidden md:block h-64 shadow-lg shadow-grey-500 sticky top-20" />

                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.2,
                            },
                        }}
                    >
                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary" className="font-body" style={{ fontFamily: "fraunces" }}>
                                09:30 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Eat</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                                10:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aperiam, velit numquam non magni aut doloremque exercitationem nostrum ipsa earum, corrupti culpa atque modi adipisci. Necessitatibus perspiciatis corrupti sunt sequi natus velit voluptatem placeat fugit corporis, aliquid ipsa ex non id officia quasi, asperiores minima quia! Vero illum magnam neque voluptates inventore, voluptatem aspernatur soluta omnis dolorum. Libero tempore minus in, exercitationem eaque nesciunt animi natus ex labore, voluptates architecto modi totam aliquam incidunt porro! Deleniti possimus, nemo tempore eligendi quos nostrum reprehenderit at aliquid tempora, eaque veniam, asperiores aspernatur fugiat pariatur neque laudantium assumenda ipsam! Ab, cumque consequuntur ducimus quam hic possimus aperiam molestias nemo! Quo dignissimos explicabo quia optio. Perspiciatis at, debitis repudiandae voluptatibus possimus, quia explicabo non eveniet dolores maiores iste tempora suscipit voluptas esse delectus voluptatum animi tenetur nemo quidem libero expedita corrupti ipsum sint consectetur. Eius distinctio, blanditiis sunt aliquid fugit totam dolore architecto illum quos amet, expedita voluptatibus laborum. Quasi, voluptas impedit sequi voluptate atque dolorem necessitatibus ipsam porro, hic placeat nihil autem tenetur, doloremque modi vel expedita laborum unde ducimus illo molestiae. Animi unde repellat eligendi perferendis blanditiis non, reprehenderit commodi asperiores ducimus voluptates velit, cumque labore officiis dolor omnis perspiciatis temporibus aperiam! Veritatis minima quaerat provident quidem facilis error dignissimos officia laborum adipisci sequi quae repellat distinctio libero enim velit consectetur assumenda blanditiis, perferendis eos facere et, dicta laudantium. Dolorum, tempora! Quasi, quas inventore? Cupiditate laboriosam eius dolorum deleniti cum quidem vel eaque quos quae, porro cumque tenetur unde doloribus nulla illo magni? Voluptate sed unde deserunt pariatur corrupti illum alias? Dolore aliquam sint ipsum asperiores exercitationem expedita iure nisi labore, mollitia nihil repellendus ipsam temporibus animi similique optio pariatur ipsa earum, veritatis quisquam tenetur illum nobis ea reiciendis. A, tempora. Ullam, obcaecati. Voluptas placeat quis laboriosam commodi alias vel repudiandae perferendis.</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                                10:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>Code</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </body>
            <Footer />
        </>

    )
}

export default History;