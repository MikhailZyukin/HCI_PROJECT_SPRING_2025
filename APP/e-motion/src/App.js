
const Log0 = {
  imageUrl: process.env.PUBLIC_URL + '/emotionLogo.png',
  imageSize:180,
};

export default function Logo() {
  return (
    <>
    <img
    classname="LogoType"
    src={Log0.imageUrl}
    alt="Logo1"
    style={{
      width: Log0.imageSize,
      height: Log0.imageSize,
    }}
    />
  </>
  );
}
