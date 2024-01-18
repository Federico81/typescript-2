import { useEffect } from 'react';
import { useState } from "react";

interface MyFunctionalComponentProps { subTitle: string }

interface Student { name: string }

const MyFunctionalComponent = (
{subTitle}: MyFunctionalComponentProps
) => {
  const [student, setStudent] = useState<null | Student>(null)
  
  useEffect(() => {
    console.log('mounted')
    }, [])
  
  return (
    <div>
      {value && <h3>{subTitle}</h3>}
      <button onClick={() => setStudent({ name: 'Marco' })}>
        CLICCAMI
      </button>
    </div>
    )
  }
  
export default MyFunctionalComponent
