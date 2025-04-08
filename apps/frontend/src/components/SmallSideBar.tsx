import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BarChartIcon from "@mui/icons-material/BarChart";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";

const SmallSidebar = () => {
  return (
    <div className="h-screen w-[74px] bg-gray-800 flex flex-col gap-[30px] items-center py-[24px]">
      <MenuIcon sx={{ color: "white" }} />
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        id="atlas_diligent_logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M19.4731 10.9859C19.4731 14.3014 18.2913 17.033 16.271 18.9211C16.2477 18.9416 16.2303 18.9631 16.207 18.9836C14.7044 20.3631 12.7452 21.2798 10.4641 21.6303L10.3099 21.4722L13.7098 1.77565L13.8377 1.41541C17.318 3.1278 19.4731 6.54577 19.4731 10.9859Z"
            fill="#EE312E"
          ></path>
          <path
            d="M13.8387 1.41641L0 11.7474V21.439V21.7924H8.33328C9.07102 21.7924 9.78162 21.7358 10.4651 21.6303L13.8387 1.41641Z"
            fill="#D3222A"
          ></path>
          <path
            d="M13.8387 1.4164L13.7427 1.55991L0.0717383 11.8148L0 11.7474C0 11.7474 0 11.7445 0 11.7416V0.207764H8.30129C8.87423 0.207764 9.42971 0.240957 9.96775 0.306368H9.98811C11.3473 0.468431 12.5988 0.824774 13.7185 1.3588C13.7631 1.38028 13.8387 1.4164 13.8387 1.4164Z"
            fill="#AF292E"
          ></path>

          <rect
            fill="url(#atlas_diligent_logo_shine)"
            clip-path="url(#atlas_diligent_logo_clip)"
            x="0"
            y="0"
            width="100%"
            height="100%"
          ></rect>
        </g>
        <defs>
          <clipPath id="atlas_diligent_logo_clip">
            <path
              d="M19.4731 10.9859C19.4731 14.3014 18.2913 17.033 16.271 18.9211C16.2477 18.9416 16.2303 18.9631 16.207 18.9836C14.7044 20.3631 12.7452 21.2798 10.4641 21.6303L10.3099 21.4722L13.7098 1.77565L13.8377 1.41541C17.318 3.1278 19.4731 6.54577 19.4731 10.9859Z"
              fill="#EE312E"
            ></path>
            <path
              d="M13.8387 1.41641L0 11.7474V21.439V21.7924H8.33328C9.07102 21.7924 9.78162 21.7358 10.4651 21.6303L13.8387 1.41641Z"
              fill="#D3222A"
            ></path>
            <path
              d="M13.8387 1.4164L13.7427 1.55991L0.0717383 11.8148L0 11.7474C0 11.7474 0 11.7445 0 11.7416V0.207764H8.30129C8.87423 0.207764 9.42971 0.240957 9.96775 0.306368H9.98811C11.3473 0.468431 12.5988 0.824774 13.7185 1.3588C13.7631 1.38028 13.8387 1.4164 13.8387 1.4164Z"
              fill="#AF292E"
            ></path>
          </clipPath>
          <linearGradient
            id="atlas_diligent_logo_shine"
            x1="-100%"
            y1="100%"
            x2="100%"
            y2="0"
          >
            <stop offset="0" stop-color="rgba(255, 255, 255, 0)">
              <animate
                begin="atlas_diligent_logo.mouseenter"
                attributeName="offset"
                from="0"
                to="0.8"
                dur="1s"
                repeatCount="1"
              ></animate>
            </stop>
            <stop offset="0" stop-color="rgba(255, 255, 255, 0.4)">
              <animate
                begin="atlas_diligent_logo.mouseenter"
                attributeName="offset"
                from="0"
                to="0,6"
                dur="1s"
                repeatCount="1"
              ></animate>
            </stop>
            <stop offset="0.1" stop-color="rgba(255, 255, 255, 0.4)">
              <animate
                begin="atlas_diligent_logo.mouseenter"
                attributeName="offset"
                from="0.1"
                to="1"
                dur="1s"
                repeatCount="1"
              ></animate>
            </stop>
            <stop offset="0.1" stop-color="rgba(255, 255, 255, 0)">
              <animate
                begin="atlas_diligent_logo.mouseenter"
                attributeName="offset"
                from="0.1"
                to="1"
                dur="1s"
                repeatCount="1"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
      <hr
        style={{ width: "100%", border: "0.4px solid gray", margin: "10px 0" }}
      />
      <HomeIcon
        sx={{
          height: "24px",
          width: "24px",
          color: "white",
        }}
      />
      <Box
        component="img"
        src="/workflow-white.svg" // No need for "/public" prefix
        alt="Workflow"
        sx={{
          width: "36px",
          height: "36px",
          color: "white",
          bgcolor: "#E5252E;",
          borderRadius: "20%",
          padding: "8px",
        }}
      />
      <AssessmentIcon sx={{ color: "white" }} />
      <BarChartIcon sx={{ color: "white" }} />
      <SecurityIcon sx={{ color: "white" }} />
      <DescriptionIcon sx={{ color: "white" }} />
      <SchoolIcon sx={{ color: "white" }} />
      <SettingsIcon sx={{ color: "white" }} />
    </div>
  );
};

export default SmallSidebar;
