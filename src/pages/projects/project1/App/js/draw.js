import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const Draw = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [painting, setPainting] = useState(false);
    const [filling, setFilling] = useState(false);
    const [colorEvent, setColorEvent] = useState(false);
    const [currentColor, setCurrentColor] = useState('#934242');
    const [lineWidth, setLineWidth] = useState(2.5);

    // ... 다른 상태 변수들
    useImperativeHandle(ref, () => ({
        initCanvas: () => {
            setTimeout(() => {
                const canvas = canvasRef.current;
                if (canvas) {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                const ctx = canvas.getContext('2d');
                setCtx(ctx);
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                ctx.strokeStyle = currentColor;
                ctx.fillStyle = currentColor;
                ctx.lineWidth = lineWidth;
                console.log('test')
                }
            }, 10);
        },
        colorChange: (color) => {
            ctx.strokeStyle = color;
        },
        rangeChange: (range) => {
            ctx.lineWidth = range;
        },
        saveClick: () => {
            const canvas = canvasRef.current;
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'Your Masterpiece';
            link.click();
        }

    }));

    const stopPainting = () => {
        setPainting(false);
    };
    
    const startPainting = () => {
        setPainting(true);
    };

    const onMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        if(!painting){
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };



    // const handleCM = (e) => {
        // preventDefault();
    //     // 우클릭방지
    // };

    // const handleSaveClick = () => {
    //     // handleSaveClick 로직
    // };

    return (
        <canvas
            ref={canvasRef}
            className={`canvas`}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            // onContextMenu={handleCM}
        />
    );
});

export default Draw;
