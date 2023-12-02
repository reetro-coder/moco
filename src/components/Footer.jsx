import { mouseHandler } from "../Utils";

export default function Footer() {
  const footerPrimaryColor = "#fff";
  const footerSecondaryColor = "#808080";
  const footerTertiaryColor = "#3f3f3f";
  return (
    <section className="footer">
      <div className="footer__flex">
        <a
          href=""
          className="footer__a nowrap footer__a1"
          onMouseEnter={() => {
            mouseHandler(footerSecondaryColor, [
              ".footer__a2",
              ".footer__a3",
              ".footer__a4",
            ]);
          }}
          onMouseLeave={() => {
            mouseHandler(footerPrimaryColor, [
              ".footer__a2",
              ".footer__a3",
              ".footer__a4",
            ]);
          }}
        >
          Parent's Guide
        </a>
        <a
          href=""
          className="footer__a nowrap footer__a2"
          onMouseEnter={() => {
            mouseHandler(footerSecondaryColor, [
              ".footer__a1",
              ".footer__a3",
              ".footer__a4",
            ]);
          }}
          onMouseLeave={() => {
            mouseHandler(footerPrimaryColor, [
              ".footer__a1",
              ".footer__a3",
              ".footer__a4",
            ]);
          }}
        >
          Terms of Service
        </a>
        <a
          href=""
          className="footer__a nowrap footer__a3"
          onMouseEnter={() => {
            mouseHandler(footerSecondaryColor, [
              ".footer__a1",
              ".footer__a2",
              ".footer__a4",
            ]);
          }}
          onMouseLeave={() => {
            mouseHandler(footerPrimaryColor, [
              ".footer__a1",
              ".footer__a2",
              ".footer__a4",
            ]);
          }}
        >
          Privacy Policy
        </a>
        <a
          href=""
          className="footer__a nowrap footer__a4"
          onMouseEnter={() => {
            mouseHandler(footerSecondaryColor, [
              ".footer__a1",
              ".footer__a2",
              ".footer__a3",
            ]);
          }}
          onMouseLeave={() => {
            mouseHandler(footerPrimaryColor, [
              ".footer__a1",
              ".footer__a2",
              ".footer__a3",
            ]);
          }}
        >
          Safe and Fair Play
        </a>
      </div>
      <div className="hr footer__hr"></div>
      <div className="footer__supercell">
        <a href="https://supercell.com">
          <svg
            width="49"
            height="40"
            viewBox="0 0 49 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.2936 1.41872L0 2.83744V6.04926L1.1564 7.07389L2.3128 8.07882H10.192V9.85222H3.528V9.35961C3.528 8.86699 3.5084 8.86699 1.764 8.86699H0V12.6108H1.3524C2.5872 12.6108 2.7244 12.5714 3.038 12.0985L3.3712 11.5862L3.9004 12.0985L4.4296 12.6108H13.2888L14.4844 11.3695L15.68 10.1478V6.99507L14.4256 5.85222L13.1516 4.72906H5.488V2.75862H11.368V3.94089H14.896V0H13.6416C12.4852 0 12.348 0.0394089 11.9952 0.53202L11.5836 1.08374L11.0348 0.53202L10.4664 0H2.5872L1.2936 1.41872ZM16.66 1.67488V3.34975H18.032V9.97044L19.3648 11.2906L20.6976 12.6108H28.5376L29.8508 11.2709L31.164 9.93103V3.34975H32.34V0H26.264V1.67488C26.264 3.33005 26.264 3.34975 26.754 3.34975H27.244V9.45813H23.128V3.34975H24.304V0H16.66V1.67488ZM33.32 1.67488V3.34975H34.692V9.45813H33.32V12.6108H41.16V9.45813H40.474C39.788 9.45813 39.788 9.45813 39.788 8.57143V7.68473H47.1576L48.0788 6.73892L49 5.7931V2.24631L47.8632 1.12315L46.7264 0H33.32V1.67488ZM44.0608 4.37438L44.002 5.41872L41.9048 5.47783L39.788 5.53695V3.34975H44.1196L44.0608 4.37438ZM0 15.2709V16.9458H1.372V23.0542H0V26.4039H14.2296L14.9548 25.6552L15.68 24.9064V20.4926H11.76V23.0542H6.468V21.0837H8.722L8.6632 19.9015L8.5848 18.7192H6.468V16.9458H11.76V19.5074H15.68V15.0542L14.9352 14.3251L14.1904 13.5961H0V15.2709ZM35.0448 15.1921L33.32 16.7882V23.1921L35.0644 24.8079L36.8084 26.4039H46.1772L47.5884 24.9655L48.9996 23.5468V20.8867H45.0796V23.0542H38.4156V16.9458H45.0796V18.9163H48.9996V13.5961H47.5492C46.1576 13.5961 46.0792 13.6355 45.5892 14.2069L45.0796 14.8177L44.57 14.2069L44.0608 13.5961H36.75L35.0448 15.1921ZM0 28.9655V30.5419H1.372V36.8473H0V40H14.406L15.0528 39.2118C15.68 38.4631 15.68 38.4433 15.68 36.2759V34.0887H11.76V36.8473H6.468V34.8768H8.624V32.5123H6.468V30.5419H11.76V33.3005H15.68V31.1133C15.68 28.9458 15.68 28.9257 15.0528 28.1773L14.406 27.3892H0V28.9655ZM16.66 28.9458V30.5222L17.3068 30.5813L17.934 30.6404L17.9928 33.734L18.0516 36.8473H16.66V40H31.1052L31.7128 39.2315L32.34 38.4433V32.7094H28.42V36.8473H23.128V30.5419H24.5V27.3892H16.66V28.9458ZM33.32 28.9458V30.5222L33.9668 30.5813L34.594 30.6404L34.6528 33.734L34.7116 36.8473H33.32V40H47.7652L48.3728 39.2315L49 38.4433V32.7094H45.08V36.8473H39.788V30.5419H41.16V27.3892H33.32V28.9458ZM32.3008 24.9655C32.242 23.5862 32.2226 23.5468 31.7128 23.4877C31.1836 23.4286 31.164 23.3693 31.164 22.2855C31.164 21.1626 31.164 21.1425 30.2428 20.4922L29.3412 19.8223L30.1054 19.172C30.5172 18.8173 30.9284 18.5218 31.0264 18.5218C31.1048 18.5218 31.1636 17.8715 31.1636 17.0833V15.6449L30.1248 14.6203L29.0858 13.5957H16.66V16.9458H18.032V23.0542H16.66V26.4039H24.108V24.7291C24.108 23.0739 24.108 23.0542 23.618 23.0542C23.1672 23.0542 23.128 22.9951 23.128 22.069V21.0837H25.872V24.9458L26.6168 25.6749L27.3616 26.4039H32.3596L32.3008 24.9655ZM25.872 19.0518H23.128V17.0197H25.872V19.0518Z"
              fill="white"
            ></path>
          </svg>
        </a>
      </div>
      <div className="footer__flex">
        <a
          href=""
          className="footer__b nowrap footer__b1"
          onMouseEnter={() => {
            mouseHandler(footerTertiaryColor, [".footer__b2", ".footer__b3"]);
          }}
          onMouseLeave={() => {
            mouseHandler(footerSecondaryColor, [".footer__b2", ".footer__b3"]);
          }}
        >
          Supercell
        </a>
        <a
          href=""
          className="footer__b nowrap footer__b2"
          onMouseEnter={() => {
            mouseHandler(footerTertiaryColor, [".footer__b1", ".footer__b3"]);
          }}
          onMouseLeave={() => {
            mouseHandler(footerSecondaryColor, [".footer__b1", ".footer__b3"]);
          }}
        >
          Fan Content Policy
        </a>
        <a
          href=""
          className="footer__b nowrap footer__b3"
          onMouseEnter={() => {
            mouseHandler(footerTertiaryColor, [".footer__b1", ".footer__b2"]);
          }}
          onMouseLeave={() => {
            mouseHandler(footerSecondaryColor, [".footer__b1", ".footer__b2"]);
          }}
        >
          Manage Cookies
        </a>
      </div>
    </section>
  );
}
