import React, { useEffect, useState, useRef, Component } from "react"
import { MetaTags } from "react-meta-tags"
import { Row, Col, Card, CardBody, CardTitle, Spinner, Button, Input, Form, Modal, Container } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';

import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import './test.css'
// import { transform } from "lodash";

import { getStorage, ref, uploadBytes } from 'firebase/storage'

const FileUploadTest = props => {

    const [filesData, setFileData] = useState(null)


    function uploadFiletoWorkdrive(e) {

        // var formData = new FormData()

        // for (const key of Object.keys(filesData)) {
        //     formData.append('file', filesData[key])
        // }

        var storage = getStorage()

        console.log("FILES DATA ...", filesData)

        for (const key of Object.keys(filesData)) {
            uploadMulti(filesData[key])
        }


        function uploadMulti(FILE) {
            console.log("IN UPLOAD MULTI...")
            const imgref = ref(storage, `imageTest/images/${FILE.name}`)

            uploadBytes(imgref, FILE)
                .then(snap => {
                    console.log("FILE UPLOAD SUCCESS...")
                })
                .catch(err => {
                    console.log("ERROR OCCURED...")
                })
        }

    }


    function selectedFiles(e) {
        console.log("I AM HERE")
        console.log("e.target.files...", e.target.files)
        setFileData(e.target.files)
        // setSelectFilesInArr(Object.keys(e.target.files).map((key) => (e.target.files)[key].name))
    }


    return (
        // <>
        //     <div>
        //         HELLO !!!!!!!!!!!
        //     </div>
        // </>

        <>
            {/* <NavBar /> */}
            <MetaTags>
                <title>Upload Files</title>
            </MetaTags>
            {/* <Container style={{border:'2px solid black'}}> */}

            {/* <Row className="justify-content-center" style={{height : '90vh', border:'2px solid red'}}>

                    <Col className="mt-5" style={{ width: '100px' }}> */}
            <Card className="" style={{ height: '100vh' }}>
                <CardBody style={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}>

                    <Row className="" style={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
                        {/* {
                            uploadStatus === 200 ?
                                <ToastContainer />
                                :
                                uploadStatus === 403 ? <ToastContainer /> : null
                        } */}

                        <Form className="">
                            <div className="file-upload" style={{ boxShadow: "-2px 2px 5px rgba(0,4,0,0.9)", width: '60vw' }}>

                                <div className="image-upload-wrap">
                                    <div type='file' />
                                    <div className="">
                                        {
                                            // selectedFilesInArr[0] ?
                                            //     <ol
                                            //         style={{ height: '280px', overflow: 'auto' }}
                                            //     >
                                            //         {
                                            //             filesData && selectedFilesInArr[0] ?
                                            //                 selectedFilesInArr.map((e, i) => (
                                            //                     <li
                                            //                         key={i}
                                            //                     >
                                            //                         {` ${e}`}
                                            //                     </li>
                                            //                 ))
                                            //                 :
                                            //                 null}
                                            //     </ol>
                                            //     :
                                            // <div style={{ transform: 'translateX(35%)', transform: 'translateY(50%)'}}>
                                            //     <img src='https://testersdock.b-cdn.net/wp-content/uploads/2017/09/file-upload-1280x640.png.webp' width='200px' height='110px' />
                                            // </div>
                                        }
                                        {/* <h3>Dont Drag and drop a file or select add Image</h3> */}
                                    </div>
                                </div>

                                <Row>
                                    <Col md='6'>
                                        <Input
                                            onChange={e => {
                                                selectedFiles(e)
                                            }}
                                            type="file"
                                            className="mt-3"
                                            color="primary"
                                            // block
                                            multiple
                                        />
                                    </Col>
                                    <Col md='3'></Col>
                                    <Col md='3'>
                                        <Button
                                            // block
                                            className="btn mt-3"
                                            onClick={(e) => {
                                                uploadFiletoWorkdrive(e)
                                            }}
                                            color="primary"
                                            type="button"
                                        // disabled={selectedFilesInArr[0] ? false : true}
                                        >
                                            Upload
                                        </Button>
                                    </Col>
                                    <Col md="12" className="mt-2">
                                        {
                                            // isUploadClick &&
                                            // <progress value={progress} max='100' style={{width:'100%'}}>
                                            //     {/* {progress} */}
                                            // </progress>
                                            // <div className="progress">
                                            //     <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">`{progress}%`</div>
                                            // </div>
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </Row>
                    <Row style={{}}>
                        <Col md='12'>

                        </Col>
                    </Row>

                </CardBody>
            </Card>
            {/* </Col>
                </Row> */}
            {/* </Container> */}
        </>

    )


}

export default FileUploadTest