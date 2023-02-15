import React from 'react'
import {
  GiDiceSixFacesOne,
  GiDiceSixFacesTwo,
  GiDiceSixFacesThree,
  GiDiceSixFacesFour,
  GiDiceSixFacesFive,
  GiDiceSixFacesSix,
} from 'react-icons/gi'


export const DieNumbers = ({ num }) => {

  if (num === 1) {
    return (<GiDiceSixFacesOne />)
  } if (num === 2) {
    return (<GiDiceSixFacesTwo />)
  } if (num === 3) {
    return (<GiDiceSixFacesThree />)
  } if (num === 4) {
    return (<GiDiceSixFacesFour />)
  } if (num === 5) {
    return (<GiDiceSixFacesFive />)
  } if (num === 6) {
    return (<GiDiceSixFacesSix />)
  }

}
