import React from 'react'
import { useApp } from '../context/state';
import data from "../data";
import Step2Bgr from '../components/Step2Bgr';
import SmallAvatar from '../components/SmallAvatar';
import AvatarInfo from '../components/AvatarInfo';
import BigAvatar from '../components/BigAvatar';
import NextStepButton from '../components/NextStepButton';

const AvatarSelection = () => {

  const step2 = data.steps[1]
  const patients=data.patients
  const {currentPatient,setCurrentPatient} = useApp();

  return (
    <section className='step2-section ci-section'>
        <div className="section-bgr">
					<Step2Bgr />
				</div>
        <div className="first-col">
            <h2>{step2.title}</h2>
            <p >{step2.content}</p>
            <div className="small-avatars-wrap">
                {
                  patients.map(patient=>
                    <SmallAvatar key={patient.id} src={patient.images?.smallAvatar} patient={patient}></SmallAvatar>
                    )
                }
                <SmallAvatar item={"/avatars/randomAvatar.png"}></SmallAvatar>
            </div>
        </div>
        <div className="second-col">
            { currentPatient && <BigAvatar /> }
        </div>
        <div className="third-col">
            { currentPatient && <AvatarInfo /> }
        </div>
        {currentPatient && <NextStepButton/>}
    </section>
  )
}

export default AvatarSelection;