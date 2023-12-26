import { useParams } from 'react-router-dom';
import NavbarComp from '../components/Home/NavbarComp';
import UnitDetailComp from '../components/Unit/UnitDetailComp';

const UnitDetailPage = () => {
  return (
    <>
      <NavbarComp />
      <UnitDetailComp/>
    </>
  );
}

export default UnitDetailPage