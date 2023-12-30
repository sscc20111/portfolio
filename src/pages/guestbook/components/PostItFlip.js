import React, { useState } from 'react';
import { Button, Container, FloatingLabel, FormControl, Stack } from 'react-bootstrap';

const PostItFlip = ({textsave, Cancel}) => {
    const [postitText, setPostItText] = useState('');

    const save = (e) => {
    textsave(e,postitText);
    setPostItText('');
    }


    return (
    <Container mx='auto' className='flipForm mw-70 p-4 rounded-4 position-fixed bg-warning-subtle' data-flip-id="flipform" style={{ maxWidth:'720px', zIndex:'3000'}}>
        <Stack direction="horizontal">
        <div className='username px-3 mb-3'>작성자</div>
        <div className='date ms-auto px-3 mb-3'>날짜</div>
        </Stack>
        <FloatingLabel className='mb-4' controlId="postitText" label='방명록을 작성해주세요'>
            <FormControl as="textarea" placeholder="Leave a comment here" style={{ height: '300px' }} value={postitText} onChange={(e) => setPostItText(e.target.value)}></FormControl>
        </FloatingLabel>
        <Stack direction='horizontal'>
        <Button className='me-2 ms-auto' onClick={save}>save</Button>
        <Button onClick={Cancel}>cancel</Button>
        </Stack>
    </Container>
    )
}

export default PostItFlip