import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
export default function MainBody(){
    const whatwewilllearn = "React JS";
    const lecturecount = "3"
    
        return(
            <div style={{minHeight: "70vh"}}>
                <p>In this course, we will learn {whatwewilllearn} by building Taskopedia</p>
                <p>Total Lecture - {lecturecount}</p>
                <ul>
                    <li>Basic Foundation</li>
                    <li>Functional and Class Components</li>
                </ul>
                {/* <div>
                    Enter Task: <input maxLength={5} readOnly={false} placeholder='Ben'></input>
                </div> */}
                <div style={{textAlign: "center"}}>
                    <div className='container row' >   Students Enrolled </div>
                    <Student experience={2} name= "Sarfaraz Uddin" headshot="
                    https://api.lorem.space/image/face?w=150&h=144
                    "> <StudentReview/> </Student>
                    <Student experience={4} name= "Sohan Shrestha" headshot="
                    https://api.lorem.space/image/face?w=150&h=150
                    ">  <StudentReview/> </Student>

                    <Student experience={5} name="Rojal Ranjit" headshot="
                    https://api.lorem.space/image/face?w=150&h=151">
                        <StudentReview />
                    </Student>
                </div>
            </div>
        )
    }