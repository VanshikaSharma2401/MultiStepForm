import React from 'react';

const Step3 = ({ data }) => {
  return (
    <div>
      <h2>Review Your Information</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Step3;
