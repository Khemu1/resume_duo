import Template1CSS from '/public/styles/template1.module.css'
import phoneIcon from '/public/assets/phone.png'
import emailIcon from '/public/assets/341245.png'
import locationIcon from '/public/assets/kindpng_6175540.png'

export default function New() {


    return(
            <div className={Template1CSS.template}>
                <div className={Template1CSS.template_contents}>
                    <form className={Template1CSS.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={Template1CSS.leftBar}>

                            <div className={Template1CSS.section}>
                                <h1>CONTACT</h1> <br /><hr /><br />
                                <div className={Template1CSS.info}>

                                    <div className={Template1CSS.phone}>
                                        <img src={phoneIcon} alt='cant find image'></img>
                                        <input type='text' name='number' className={Template1CSS.left_input_field} placeholder='+123-456-7890' ></input>
                                    </div>

                                    <div className={Template1CSS.phone}>
                                        <img src={emailIcon} alt='cant find image' className={Template1CSS.emailIcon}></img>
                                        <input type='text' name='email' className={Template1CSS.left_input_field} placeholder='hello@reallygreatsite.com' ></input>
                                    </div>

                                    <div className={Template1CSS.phone}>
                                        <img src={locationIcon} alt='cant find image' ></img>
                                        <input type='text' name='location' className={Template1CSS.left_input_field} placeholder='123 Anywhere St., Any City' ></input>
                                    </div>

                                </div>
                            </div>


                            <div className={Template1CSS.section}>
                                <h1>EDUCATION</h1> <br /><hr /><br />
                                <div className={Template1CSS.info}>

                                    <div className={Template1CSS.education}>
                                        <div className={Template1CSS.phone}>
                                            <input type='text' name='university_name_1' className={Template1CSS.left_input_field_education} placeholder='university name' ></input>
                                        </div>

                                        <div className={Template1CSS.phone}>
                                            <input type='text' name='degree' className={Template1CSS.left_input_field} placeholder='degree' ></input>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className={Template1CSS.section}>
                                <h1>SKILLS</h1> <br /><hr /><br />
                                <div className={Template1CSS.skills_info}>

                                    <ul>
                                        <li><input type='text' name='skill_1' className={Template1CSS.left_input_field} placeholder='skill 1' ></input></li>
                                        <li><input type='text' name='skill_2' className={Template1CSS.left_input_field} placeholder='skill 2' ></input></li>
                                        <li><input type='text' name='skill_3' className={Template1CSS.left_input_field} placeholder='skill 3' ></input></li>
                                        <li><input type='text' name='skill_4' className={Template1CSS.left_input_field} placeholder='skill 4' ></input></li>
                                        <li><input type='text' name='skill_5' className={Template1CSS.left_input_field} placeholder='skill 5' ></input></li>
                                    </ul>

                                </div>
                            </div>




                            <div className={Template1CSS.section}>
                                <h1>LANGUAGES</h1> <br /><hr /><br />
                                <div className={Template1CSS.skills_info}>

                                    <ul>
                                        <li><input type='text' name='language_1' className={Template1CSS.left_input_field} placeholder='language 1' ></input></li>
                                        <li><input type='text' name='language_2' className={Template1CSS.left_input_field} placeholder='language 2' ></input></li>
                                        <li><input type='text' name='language_3' className={Template1CSS.left_input_field} placeholder='language 3' ></input></li>
                                        <li><input type='text' name='language_4' className={Template1CSS.left_input_field} placeholder='language 4' ></input></li>
                                        <li><input type='text' name='language_5' className={Template1CSS.left_input_field} placeholder='language 5' ></input></li>
                                    </ul>

                                </div>
                            </div>


                        </div>

                        <div className={Template1CSS.rightPart}>
                            <div className={Template1CSS.rightPart_contents}>


                                <div className={Template1CSS.nameAndJob}>
                                    <input type='text' name='name' className={Template1CSS.name_input_field} placeholder='Enter your name here' ></input>
                                    <input type='text' name='job_title' className={Template1CSS.jobTitle_input_field} placeholder='Enter your job here' ></input>
                                </div>


                                <div className={Template1CSS.section}>
                                    <h1>PROFILE</h1> <br /><hr /><br />
                                    <div className={Template1CSS.info}>

                                        <textarea name='profile' placeholder='enter your profile details here' className={Template1CSS.profile} rows={7} />

                                    </div>
                                </div>




                                <div className={Template1CSS.section}>
                                    <h1>WORK EXPERIENCE</h1> <br /><hr /><br />
                                    <div className={Template1CSS.info}>

                                    <input type='text' name='company' className={Template1CSS.company_input_field} placeholder='Company name' ></input>
                                    <input type='text' name='position' className={Template1CSS.position_input_field} placeholder='your position' ></input>


                                        <textarea name='profile' placeholder='details about your work experience' className={Template1CSS.profile} rows={7} />

                                    </div>
                                </div>



                                <div className={Template1CSS.last_right_section}>
                                    <h1>REFERENCE</h1> <br /><hr /><br />
                                    <div className={Template1CSS.info}>

                                    <input type='text' name='refrence' className={Template1CSS.company_input_field} placeholder='Estelle Darcy' ></input>
                                    <input type='text' name='position' className={Template1CSS.position_input_field} placeholder='Wardiere Inc. / CTO' ></input>

                                    <div className={Template1CSS.refrence_number}>phone : 
                                    <input type='text' name='position' className={Template1CSS.refrence_number_input_field} placeholder='123-456-7890' ></input>
                                    </div>

                                    <div className={Template1CSS.refrence_number}>Email : 
                                    <input type='text' name='position' className={Template1CSS.refrence_number_input_field} placeholder='hello@reallygreatsite.com' ></input>
                                    </div>

                                    </div>
                                </div>



                            </div>
                        </div>

                    </form> 
                </div>
            </div>
    )

}