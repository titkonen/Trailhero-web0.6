import React from 'react';
import firebase from '../firebase';
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css';

export const ReadMaintenance = ({ maintenanceinfo }) => {
   const [bikename, setBikeName] = React.useState(maintenanceinfo.bikename); // name
   const [frontfork, setFrontFork] = React.useState(maintenanceinfo.frontfork); // frontFork
   const [rearshock, setRearShock] = React.useState(maintenanceinfo.rearshock); // rearShock 

   const [frontwheel, setFrontWheel] = React.useState(maintenanceinfo.frontwheel); // frontWheel
   const [rearwheel, setRearWheel] = React.useState(maintenanceinfo.rearwheel); // rearWheel
   const [fronttire, setFrontTire] = React.useState(maintenanceinfo.fronttire); // frontTire
   const [reartire, setRearTire] = React.useState(maintenanceinfo.reartire); // rearTire

   const [frontbrake, setFrontBrake] = React.useState(maintenanceinfo.frontbrake); // frontBrake
   const [rearbrake, setRearBrake] = React.useState(maintenanceinfo.rearbrake); // rearBrake

   const [rearderailleur, setRearDerailleur] = React.useState(maintenanceinfo.rearderailleur); // rearDerailleur
   const [shifters, setShifters] = React.useState(maintenanceinfo.shifters); // shifters
   const [crankset, setCrankset] = React.useState(maintenanceinfo.crankset); // crankset
   const [cassette, setCassette] = React.useState(maintenanceinfo.cassette); // cassette
   const [chain, setChain] = React.useState(maintenanceinfo.chain); // chain
   const [bottombracket, setBottombracket] = React.useState(maintenanceinfo.bottombracket); // bottombracket
   const [headset, setHeadset] = React.useState(maintenanceinfo.headset); // headset
   const [bars, setBars] = React.useState(maintenanceinfo.bars); // bars
   const [brakerotors, setBrakerotors] = React.useState(maintenanceinfo.brakerotors); // brakerotors
   const [stem, setStem] = React.useState(maintenanceinfo.stem); // stem
   const [grips, setGrips] = React.useState(maintenanceinfo.grips); // grips
   const [seatpost, setSeatpost] = React.useState(maintenanceinfo.seatpost); // seatpost
   const [saddle, setSaddle] = React.useState(maintenanceinfo.saddle); // saddle
   const [extramemo, setExtramemo] = React.useState(maintenanceinfo.extramemo); // extramemo 

   // Updates data identicating right id and add new updated values.
   const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('maintenance').doc(maintenanceinfo.id).set({
         ...maintenanceinfo,
         bikename,
         frontfork,
         rearshock,
         frontwheel,
         rearwheel,
         fronttire,
         reartire,
         frontbrake,
         rearbrake,
         rearderailleur,
         shifters,
         crankset,
         cassette,
         chain,
         bottombracket,
         headset,
         bars,
         brakerotors,
         stem,
         grips,
         seatpost,
         saddle,
         extramemo
      })
   }

   // Deletes data with identicating right id
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('maintenance').doc(maintenanceinfo.id).delete()
   }

   return (
      <div className="table-container">
            <h2 className="#">Bike components</h2>
            <Row>
               <Col xs={12} sm={12} md={12}>
                  <label className="labelname">Bike Name</label><br></br>
                  <input
                     value={bikename}
                     className="input input-heading"
                     placeholder="Bike name"
                     size="80"
                     onChange={(event) => {
                        setBikeName(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Front fork</label><br></br>
                  <input
                     value={frontfork}
                     className="input"
                     placeholder="Front fork"
                
                     onChange={(event) => {
                        setFrontFork(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Rear shock</label><br></br>
                  <input
                     value={rearshock}
                     className="input"
                     placeholder="Rear shock"
                     size="20"
                     onChange={(event) => {
                        setRearShock(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Front wheel</label><br></br>
                  <input
                     value={frontwheel}
                     className="input"
                     placeholder="Front wheel"
                     size="20"
                     onChange={(event) => {
                        setFrontWheel(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Rear wheel</label><br></br>
                  <input
                     value={rearwheel}
                     className="input"
                     placeholder="Rear wheel"
                     size="20"
                     onChange={(event) => {
                        setRearWheel(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={3} md={3}> 
                  <label className="labelname">Front tire</label><br></br>
                  <input
                     value={fronttire}
                     className="input"
                     placeholder="Front tire"
                     size="20"
                     onChange={(event) => {
                        setFrontTire(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Rear tire</label><br></br>
                  <input
                     value={reartire}
                     className="input"
                     placeholder="Rear tire"
                     size="20"
                     onChange={(event) => {
                        setRearTire(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Front brake</label><br></br>
                  <input
                     value={frontbrake}
                     className="input"
                     placeholder="Front brake"
                     size="20"
                     onChange={(event) => {
                        setFrontBrake(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Rear brake</label><br></br>
                  <input
                     value={rearbrake}
                     className="input"
                     placeholder="Rear brake"
                     size="20"
                     onChange={(event) => {
                        setRearBrake(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Rear derailleur</label><br></br>
                  <input
                     value={rearderailleur}
                     className="input"
                     placeholder="Rear derailleur"
                     size="20"
                     onChange={(event) => {
                        setRearDerailleur(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Shifters</label><br></br>
                  <input
                     value={shifters}
                     className="input"
                     placeholder="Shifters"
                     size="20"
                     onChange={(event) => {
                        setShifters(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Crankset</label><br></br>
                  <input
                     value={crankset}
                     className="input"
                     placeholder="Crankset"
                     size="20"
                     onChange={(event) => {
                        setCrankset(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Cassette</label><br></br>
                  <input
                     value={cassette}
                     className="input"
                     placeholder="Cassette"
                     size="20"
                     onChange={(event) => {
                        setCassette(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Chain</label><br></br>
                  <input
                     value={chain}
                     className="input"
                     placeholder="Chain"
                     size="20"
                     onChange={(event) => {
                        setChain(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Bottom Bracket</label><br></br>
                  <input
                     value={bottombracket}
                     className="input"
                     placeholder="Bottom Bracket"
                     size="20"
                     onChange={(event) => {
                        setBottombracket(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Headset</label><br></br>
                  <input
                     value={headset}
                     className="input"
                     placeholder="Headset"
                     size="20"
                     onChange={(event) => {
                        setHeadset(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={3} md={3}>
                  <label className="labelname">Bars</label><br></br>
                  <input
                     value={bars}
                     className="input"
                     placeholder="Bars"
                     size="20"
                     onChange={(event) => {
                        setBars(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={3} md={3}>
                     <label className="labelname">Brake Rotors</label><br></br>
                     <input
                        value={brakerotors}
                        className="input"
                        placeholder="Brake Rotors"
                        size="20"
                        onChange={(event) => {
                           setBrakerotors(event.target.value);
                        }}
                     />
               </Col>
               <Col xs={6} sm={3} md={3}>
                     <label className="labelname">Stem</label><br></br>
                     <input
                        value={stem}
                        className="input"
                        placeholder="Stem"
                        size="20"
                        onChange={(event) => {
                           setStem(event.target.value);
                        }}
                     />
               </Col>
               <Col xs={6} sm={3} md={3}>
                     <label className="labelname">Grips</label><br></br>
                     <input
                        value={grips}
                        className="input"
                        placeholder="Grips"
                        size="20"
                        onChange={(event) => {
                           setGrips(event.target.value);
                        }}
                     />
               </Col>
               <Col xs={6} sm={3} md={3}>
                     <label className="labelname">Seatpost</label><br></br>
                     <input
                        value={seatpost}
                        className="input"
                        placeholder="Seatpost"
                        size="20"
                        onChange={(event) => {
                           setSeatpost(event.target.value);
                        }}
                     />
               </Col>
            </Row>
            <Row>
               <Col xs={6} sm={3} md={3}>
                     <label className="labelname">Saddle</label><br></br>
                     <input
                        value={saddle}
                        className="input"
                        placeholder="Saddle"
                        size="20"
                        onChange={(event) => {
                           setSaddle(event.target.value);
                        }}
                     />
               </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <label className="labelname">Additional info</label><br></br>
                  <textarea 
                    name="info" 
                    rows="5" 
                    cols="53"
                    className="textarea-style"
                    value={extramemo}
                    placeholder="Additional info"
                    onChange={(event) => setExtramemo(event.target.value)}
                  ></textarea>
              </Col>
            </Row>
            <Row>
               <div className="#">
                  <Button className="crud-buttons button-blue" variant="light" onClick={onUpdate}>UPDATE</Button>
                  <Button className="crud-buttons button-red" variant="light" onClick={onDelete}>DELETE</Button>
               </div>
            </Row>
      </div>
   )
}