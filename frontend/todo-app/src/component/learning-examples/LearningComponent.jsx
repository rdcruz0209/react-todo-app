// eslint-disable-next-line import/no-duplicates
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
// eslint-disable-next-line import/no-duplicates
import { FifthComponent } from './FirstComponent'
import LearningJavaScript from './LearningJavaScript'

export default function LearningComponent() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
      <LearningJavaScript></LearningJavaScript>
    </div>
  )
}
