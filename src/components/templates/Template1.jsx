import Template1CSS from '/public/styles/template1.module.css'
import phoneIcon from '/public/assets/phone.png'
import emailIcon from '/public/assets/341245.png'
import locationIcon from '/public/assets/kindpng_6175540.png'
import { useTempData } from "/src/hooks/user.js";
import { useForm } from "react-hook-form"
import { userSchema } from '/src/validations/tempValidation.js'

export default function New(props) {
    const {register, handleSubmit} = useForm();

    const {
        loading : useTempDataLodaing,
        error : useTempDataErrors,
        handleUseTempData,
    } = useTempData();
    

    async function onSubmit(data) {
        console.log(data);
        try {
            const isValid = await userSchema.validate(data)
            await handleUseTempData(data)
            console.log(useTempDataErrors)
        console.log(isValid)
        } catch (error) {
            console.error(error)
        }
        // if(isValid){
        //     try {
        //         await handleUseTempData(data)
        //         console.log(useTempDataErrors)
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }
    }

    return(
            <div className={Template1CSS.template}>
                <div className={Template1CSS.template_contents}>
                    <form className={Template1CSS.form} onSubmit={handleSubmit(onSubmit)}>

                        <div className={Template1CSS.insideForm}>

                        <div className={Template1CSS.leftBar}>

                            <div className={Template1CSS.section}>
                                <h1>CONTACT</h1> <br /><hr /><br />
                                <div className={Template1CSS.info}>

                                    <div className={Template1CSS.phone}>
                                        <img src={phoneIcon} alt='cant find image'></img>
                                        <input type='text' {...register('user_number')} className={Template1CSS.left_input_field} placeholder='+123-456-7890' ></input>
                                    </div>

                                    <div className={Template1CSS.phone}>
                                        <img src={emailIcon} alt='cant find image' className={Template1CSS.emailIcon}></img>
                                        <input type='email' {...register('user_email')} className={Template1CSS.left_input_field} placeholder='hello@reallygreatsite.com' ></input>
                                    </div>

                                    <div className={Template1CSS.phone}>
                                        <img src={locationIcon} alt='cant find image' ></img>
                                        <input type='text' {...register('user_location')} className={Template1CSS.left_input_field} placeholder='123 Anywhere St., Any City' ></input>
                                    </div>

                                </div>
                            </div>


                            <div className={Template1CSS.section}>
                                <h1>EDUCATION</h1> <br /><hr /><br />
                                <div className={Template1CSS.info}>

                                    <div className={Template1CSS.education}>
                                        <div className={Template1CSS.phone}>
                                            <input type='text' {...register('university_name')} className={Template1CSS.left_input_field_education} placeholder='university name' ></input>
                                        </div>

                                        <div className={Template1CSS.phone}>
                                            <input type='text' {...register('user_degree')} className={Template1CSS.left_input_field} placeholder='degree' ></input>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className={Template1CSS.section}>
                                <h1>SKILLS</h1> <br /><hr /><br />
                                <div className={Template1CSS.skills_info}>

                                    <ul>
                                        <li><input type='text' {...register('skill_1')} className={Template1CSS.left_input_field} placeholder='skill 1' ></input></li>
                                        <li><input type='text' {...register('skill_2')} className={Template1CSS.left_input_field} placeholder='skill 2' ></input></li>
                                        <li><input type='text' {...register('skill_3')} className={Template1CSS.left_input_field} placeholder='skill 3' ></input></li>
                                        <li><input type='text' {...register('skill_4')} className={Template1CSS.left_input_field} placeholder='skill 4' ></input></li>
                                        <li><input type='text' {...register('skill_5')} className={Template1CSS.left_input_field} placeholder='skill 5' ></input></li>
                                    </ul>

                                </div>
                            </div>




                            <div className={Template1CSS.section}>
                                <h1>LANGUAGES</h1> <br /><hr /><br />
                                <div className={Template1CSS.skills_info}>

                                    <ul>
                                        <li><input type='text' {...register('language_1')} className={Template1CSS.left_input_field} placeholder='language 1' ></input></li>
                                        <li><input type='text' {...register('language_2')} className={Template1CSS.left_input_field} placeholder='language 2' ></input></li>
                                        <li><input type='text' {...register('language_3')} className={Template1CSS.left_input_field} placeholder='language 3' ></input></li>
                                        <li><input type='text' {...register('language_4')} className={Template1CSS.left_input_field} placeholder='language 4' ></input></li>
                                        <li><input type='text' {...register('language_5')} className={Template1CSS.left_input_field} placeholder='language 5' ></input></li>
                                    </ul>

                                </div>
                            </div>


                        </div>

                        <div className={Template1CSS.rightPart}>
                            <div className={Template1CSS.rightPart_contents}>


                                <div className={Template1CSS.nameAndJob}>
                                    <input type='text' {...register('user_name')} className={Template1CSS.name_input_field} placeholder='Enter your name here' ></input>
                                    <input type='text' {...register('user_job_title')} className={Template1CSS.jobTitle_input_field} placeholder='Enter your job here' ></input>
                                </div>


                                <div className={Template1CSS.section}>
                                    <h1>PROFILE</h1> <br /><hr /><br />
                                    <div className={Template1CSS.info}>

                                        <textarea {...register('profile_details')} placeholder='enter your profile details here' className={Template1CSS.profile} rows={7} />

                                    </div>
                                </div>




                                <div className={Template1CSS.section}>
                                    <h1>WORK EXPERIENCE</h1> <br /><hr /><br />
                                    <div className={Template1CSS.info}>

                                    <input type='text' {...register('experience_company')} className={Template1CSS.company_input_field} placeholder='Company name' ></input>
                                    <input type='text' {...register('experience_position')} className={Template1CSS.position_input_field} placeholder='your position' ></input>


                                        <textarea {...register('experience_details')} placeholder='details about your work experience' className={Template1CSS.profile} rows={7} />

                                    </div>
                                </div>



                                <div className={Template1CSS.last_right_section}>
                                    <h1>REFERENCE</h1> <br /><hr /><br />
                                    <div className={Template1CSS.info}>

                                    <input type='text' {...register('refrence')} className={Template1CSS.company_input_field} placeholder='Estelle Darcy' ></input>
                                    <input type='text' {...register('refrence_position')} className={Template1CSS.position_input_field} placeholder='Wardiere Inc. / CTO' ></input>

                                    <div className={Template1CSS.refrence_number}>phone : 
                                    <input type='text' {...register('refrence_number')} className={Template1CSS.refrence_number_input_field} placeholder='123-456-7890' ></input>
                                    </div>

                                    <div className={Template1CSS.refrence_number}>Email : 
                                    <input type='email' {...register('refrence_email')} className={Template1CSS.refrence_number_input_field} placeholder='hello@reallygreatsite.com' ></input>
                                    </div>

                                    </div>
                                </div>



                            </div>
                        </div>
                        </div>

                        <button name="submit" type='submit' className={Template1CSS.submitButton} disabled={useTempDataLodaing} >submit</button>

                    </form> 
                </div>
            </div>
    )

}