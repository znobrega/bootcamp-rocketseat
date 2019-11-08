import React from 'react';

export default function Main() {
  function handleSubmet() {
    console.log('ok');
  }

  return <input onChange={handleSubmet} />;
}
