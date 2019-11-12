const Map = () => {
    return(
        <>
            <div className="c-map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.43728830107!2d85.32095551423551!3d27.703781732257266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a86d92de5f%3A0xd6a23381c4e35c7e!2sKantipur%20City%20College!5e0!3m2!1sen!2snp!4v1569053914435!5m2!1sen!2snp" frameBorder="0" style={{border:"0", height: "100%", width: "100%"}} allowFullScreen=""></iframe>
            </div>
            <style jsx>{`
            .c-map-wrapper{
                flex: 1;
            }
            `}</style>
        </>
    );
}

export default Map;