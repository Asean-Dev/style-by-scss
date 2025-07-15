"use client";

import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Modal from '@mui/material/Modal';

import ListDownload from "@/components/modules/list/download";

import CloseIcon from '@mui/icons-material/Close';

import "@/assets/scss/components/_form.scss";
import "@/assets/scss/components/_modal.scss";

import { FeedbacktDownloadList } from "@/constant/index-list";

export default function LayoutItem() {
    const router = useRouter();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="layout-feedback">
                <div className="item-box">
                    <div className="head">
                        <Typography variant="h2" className="h2 txt">
                            <strong>แบบสอบถามการรับรู้ "แนวทางการปฏิบัติราชการจากคำวินิจฉัยของศาลปกครองสูงสุด ประจำปี พ.ศ. ๒๕๖๘"</strong>
                        </Typography>
                    </div>
                    <div className="body">
                        <div className="item">
                            <div className="layout-action text">
                                <div className="inner">
                                    <Typography variant="h3" className="h5 title">
                                        <strong>หลักเกณฑ์การรับฟังความเห็น</strong>
                                    </Typography>
                                </div>
                            </div>
                            <div className="data-box">
                                <div className="layout-cms">
                                    <p>
                                        ข้าพเจ้าขอเสนอให้มีการปรับปรุงกระบวนการสื่อสารระหว่างศาลและประชาชนให้มีความชัดเจน เข้าถึงง่าย และโปร่งใสมากยิ่งขึ้น เช่นจัดตั้งช่องทางสื่อสารออนไลน์ที่ประชาชนสามารถติดตามความคืบหน้าคดี หรือสอบถามข้อมูลได้โดยสะดวกเพิ่มการจัดกิจกรรมพบปะประชาชนในชุมชน เพื่อรับฟังความคิดเห็นและข้อเสนอแนะเกี่ยวกับการให้บริการของศาลส่งเสริมให้ศาลเผยแพร่ข้อมูลสำคัญ เช่น ขั้นตอนการดำเนินคดี สิทธิของประชาชน และแนวทางการขอความช่วยเหลือทางกฎหมายอย่างเข้าใจง่ายเชื่อว่าการพัฒนาในด้านดังกล่าวจะทำให้ศาลเป็นที่พึ่งที่ประชาชนเชื่อมั่น และเข้าถึงความยุติธรรมได้อย่างแท้จริง
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="layout-action text">
                                <div className="inner">
                                    <Typography variant="h3" className="h5 title">
                                        <strong>เอกสารประกอบ</strong>
                                    </Typography>
                                </div>
                            </div>
                            <div className="data-box">
                                <ListDownload ListDownload={FeedbacktDownloadList}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Box component="form" className="form-default" noValidate autoComplete="off">
                    <fieldset className="form-fieldset">
                        <div className="item-box">
                            <div className="body">
                                <legend className="layout-action text form-legend">
                                    <div className="inner">
                                        <Typography variant="h3" className="h5 title">
                                            <strong>ส่วนที่ ๒  แบบสอบถามความรับรู้กฎหมายและการใช้ประโยชน์จากหนังสือ "แนวทางการปฏิบัติราชการจากคำวินิจฉัยศาลปกครองสูงสุด ประจำปี ๒๕๖๖" </strong>
                                        </Typography>
                                    </div>
                                </legend>
                                <div className="form-subtitle">
                                    <Typography variant="h4" className="h5 title">
                                        <strong>1. ท่านเข้าใจเนื้อหากฎหมาย   "แนวทางการปฏิบัติราชการจากคำวินิจฉัยของศาลปกครองสูงสุด ประจำปี ๒๕๖๖" มากน้อยเพียงใด </strong>
                                    </Typography>
                                </div>
                                <div className="form-radio">
                                    <FormControl>
                                        <FormLabel id="feedbackI">การนำเสนอ สามารถเข้าใจกฎหมายได้ชัดเจน</FormLabel>
                                        <RadioGroup row aria-labelledby="feedbackI" name="feedbackI">
                                            <FormControlLabel value="ควรปรับปรุง" control={<Radio />} label="ควรปรับปรุง" />
                                            <FormControlLabel value="พอใช้" control={<Radio />} label="พอใช้" />
                                            <FormControlLabel value="ดี" control={<Radio />} label="ดี" />
                                            <FormControlLabel value="ดีมาก" control={<Radio />} label="ดีมาก" />
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="feedbackII">เนื้อหาสอดคล้องกับภารกิจหน่วยงานทางปกครองของท่าน</FormLabel>
                                        <RadioGroup row aria-labelledby="feedbackII" name="feedbackII">
                                            <FormControlLabel value="ควรปรับปรุง" control={<Radio />} label="ควรปรับปรุง" />
                                            <FormControlLabel value="พอใช้" control={<Radio />} label="พอใช้" />
                                            <FormControlLabel value="ดี" control={<Radio />} label="ดี" />
                                            <FormControlLabel value="ดีมาก" control={<Radio />} label="ดีมาก" />
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="feedbackIII">เนื้อหามีความสมบูรณ์ ถูกต้อง  </FormLabel>
                                        <RadioGroup row aria-labelledby="feedbackIII" name="feedbackIII">
                                            <FormControlLabel value="ควรปรับปรุง" control={<Radio />} label="ควรปรับปรุง" />
                                            <FormControlLabel value="พอใช้" control={<Radio />} label="พอใช้" />
                                            <FormControlLabel value="ดี" control={<Radio />} label="ดี" />
                                            <FormControlLabel value="ดีมาก" control={<Radio />} label="ดีมาก" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="item-box">
                            <div className="body">
                                <div className="form-subtitle">
                                    <Typography variant="h4" className="h5 title">
                                        <strong>2.  การใช้ประโยชน์หนังสือ  "แนวทางการปฏิบัติราชการจากคำวินิจฉัยของศาลปกครองสูงสุด ประจำปี ๒๕๖๖"</strong>
                                    </Typography>
                                </div>
                                <div className="form-radio">
                                    <FormControl>
                                        <FormLabel id="feedbackIV">สามารถใช้อ้างอิงแนวทางปฏิบัติราชการในหน่วยงานของท่าน</FormLabel>
                                        <RadioGroup row aria-labelledby="feedbackIV" name="feedbackIV">
                                            <FormControlLabel value="ควรปรับปรุง" control={<Radio />} label="ควรปรับปรุง" />
                                            <FormControlLabel value="พอใช้" control={<Radio />} label="พอใช้" />
                                            <FormControlLabel value="มีประโยชน์ดี" control={<Radio />} label="มีประโยชน์ดี" />
                                            <FormControlLabel value="มีประโยชน์ดีมาก" control={<Radio />} label="มีประโยชน์ดีมาก" />
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="feedbackV">มีประโยชน์สนับสนุนการปฏิบัติหน้าที่ในหน่วยงานของท่าน</FormLabel>
                                        <RadioGroup row aria-labelledby="feedbackV" name="feedbackV">
                                            <FormControlLabel value="ควรปรับปรุง" control={<Radio />} label="ควรปรับปรุง" />
                                            <FormControlLabel value="พอใช้" control={<Radio />} label="พอใช้" />
                                            <FormControlLabel value="มีประโยชน์ดี" control={<Radio />} label="มีประโยชน์ดี" />
                                            <FormControlLabel value="มีประโยชน์ดีมาก" control={<Radio />} label="มีประโยชน์ดีมาก" />
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="feedbackVI">สามารถใช้ข้อมูลเพื่อฝึกอบรมในหน่วยงานของท่าน</FormLabel>
                                        <RadioGroup row aria-labelledby="feedbackVI" name="feedbackVI">
                                            <FormControlLabel value="ควรปรับปรุง" control={<Radio />} label="ควรปรับปรุง" />
                                            <FormControlLabel value="พอใช้" control={<Radio />} label="พอใช้" />
                                            <FormControlLabel value="มีประโยชน์ดี" control={<Radio />} label="มีประโยชน์ดี" />
                                            <FormControlLabel value="มีประโยชน์ดีมาก" control={<Radio />} label="มีประโยชน์ดีมาก" />
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel id="feedbackVII">สามารถใช้อ้างอิงกฎหมายปกครองในทางวิชาการด้านอื่นๆ</FormLabel>
                                        <RadioGroup row aria-labelledby="feedbackVII" name="feedbackVII">
                                            <FormControlLabel value="ควรปรับปรุง" control={<Radio />} label="ควรปรับปรุง" />
                                            <FormControlLabel value="พอใช้" control={<Radio />} label="พอใช้" />
                                            <FormControlLabel value="มีประโยชน์ดี" control={<Radio />} label="มีประโยชน์ดี" />
                                            <FormControlLabel value="มีประโยชน์ดีมาก" control={<Radio />} label="มีประโยชน์ดีมาก" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="item-box">
                            <div className="body">
                                <div className="form-subtitle">
                                    <Typography variant="h4" className="h5 title">
                                        <strong>3. ข้อเสนอแนะเกี่ยวกับการเผยแพร่หนังสือ  "แนวทางการปฏิบัติราชการจากคำวินิจฉัยของศาลปกครองสูงสุด ประจำปี "  ให้แก่หน่วยงานใดเพิ่มเติม</strong>
                                    </Typography>
                                </div>
                                <div className="form-group">
                                    <div className="col">
                                        <TextField fullWidth label="คำตอบ *" id="answerI" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-box">
                            <div className="body">
                                <div className="form-subtitle">
                                    <Typography variant="h4" className="h5 title">
                                        <strong>4. ข้อเสนอแนะเกี่ยวกับการจัดทำรูปเล่มและเนื้อหา  "แนวทางการปฏิบัติราชการจากคำวินิจฉัยของศาลปกครองสูงสุด ประจำปี "</strong>
                                    </Typography>
                                </div>
                                <div className="form-group">
                                    <div className="col">
                                        <TextField fullWidth label="คำตอบ *" id="answerII" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-box">
                            <div className="body">
                                <div className="form-subtitle">
                                    <Typography variant="h4" className="h5 title">
                                        <strong>5. ข้อเสนอแนะ อื่นๆ</strong>
                                    </Typography>
                                </div>
                                <div className="form-group">
                                    <div className="col">
                                        <TextField fullWidth label="คำตอบ *" id="answerIII" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <Box className="form-action">
                            <Button component={Link} href="/" onClick={router.back} variant="outlined"
                                color="secondary" size="medium"
                            >
                                <span className="icon" aria-hidden="true">
                                    <span className="feather icon-arrow-left"></span>
                                </span>
                                ย้อนกลับ
                            </Button>
                            <Button onClick={handleOpen} variant="contained"
                                color="secondary" size="medium"
                            >
                                ยืนยันข้อมูล
                                <span className="icon" aria-hidden="true">
                                    <span className="feather icon-arrow-right"></span>
                                </span>
                            </Button>
                        </Box>
                    </fieldset>
                </Box>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <Button className="modal-close" variant="contained" color="secondary" size="medium" onClick={handleClose}>
                        ปิด
                        <CloseIcon/>
                    </Button>
                    <div className="inner">
                        <div className="icon">
                            <span className="feather icon-check"></span>
                            {/* <span className="feather icon-x"></span> */}
                        </div>
                        <Typography id="modal-modal-title" variant="h5" className="h1 title">
                            <strong>ส่งความคิดเห็นสำเร็จ</strong>
                        </Typography>
                        <Typography id="modal-modal-description" variant="body1" className="h4 desc">
                            ขอบคุณสำหรับความคิดเห็นของท่าน <br />
                            ข้อเสนอแนะของท่านจะถูกนำไปพิจารณาเพื่อปรับปรุงการให้บริการต่อไป
                        </Typography>
                        <div className="action">
                            <Button component={Link} href="/home" variant="contained"
                                color="secondary" size="medium"
                            >
                                กลับหน้าหลัก
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
