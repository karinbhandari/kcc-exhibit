import React from 'react';

var ImageParallex = () => {
      return(
        <>
        <div className="image-parallex-container">
              <img className="parallex parallex1" src="/static/images/parallex.jpeg" alt="parallex-image" width="100%" height="auto"/>
        </div>
        <style jsx>{`
            .image-parallex-container{
                position: fixed;
                height: 100vh;
                width: 100%;
                top: 0;
                left: 0;
                display: flex;
                flex-direction: column;
                z-index: -1;
            }
            .image-parallex-container>*{
                flex: 1;
            }
            .parallex{
                background-attachment: fixed;
                background-position: center;
                background-repeat: repeat;
                width: 100%;
                height: auto;
            }
        `}</style>
        </>
      );
}
export default ImageParallex;