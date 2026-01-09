export const siteConfig = {
  name: "Sean Kane",
  title: "Electrical Engineering - Stony Brook University",
  description: "Portfolio website of Sean Kane",
  accentColor: "#00555A",
  social: {
    email: "sean.ryan.kane@gmail.com",
    github: "https://github.com/kanesea2542",
    linkedin: "https://www.linkedin.com/in/-sean-kane/",
  },
  aboutMe:
    "Electrical engineering student at Stony Brook University with a focus on embedded systems and hardware design. Experienced in microcontroller bring-up, low-level firmware development, and PCB design, with hands-on work across robotics, wireless systems, and FPGA projects.",
    skills: ["C/C++", " AVR Assembly", "Altium Designer", "JTAG/SWD"],
  projects: [
    {
      name: "Dual-Mode BLE Beacon",
      description:
        "A dual-mode Bluetooth Low Energy (BLE) beacon using the Nordic nRF52 platform, featuring custom PCB design, and wireless debugging to support multiple operating modes.",
      link: "https://drive.google.com/file/d/1oSUkM8iKJQTDxW3LEcr5OQbL_ix2yaBl/view?usp=sharing",
      skills: ["Altium Designer", "Oscilloscope", "Fusion 360"],
    },
    {
      name: "Embedded Motion Control System",
      description:
        "An embedded motion control system using an STM32 microcontroller and DRV8825 stepper drivers, interfacing with an NVIDIA Jetson for high-level command and control. Implemented low-level motor control, hardware abstraction, and communication between the Jetson and microcontroller to drive multiple stepper motors reliably.",
      link: "https://drive.google.com/file/d/1dvP4PLauzXKpEvu9907UPOQ-2DVjib5v/view?usp=sharing",
      skills: ["Altium Designer", "Linux", "Differential Pairs"],
    },
    {
      name: "Interrupt-Driven Embedded Interface System",
      description:
        "A bare-metal embedded system on the AVR128DB48 featuring interrupt-driven firmware, peripheral configuration, and reliable serial communication for real-time input and output handling.",
      link: "https://drive.google.com/file/d/19mF13jmOQQvSY6MpdVP9oDVe8bMr1Awv/view?usp=sharing",
      skills: ["AVR128DB48", "AVR Assembly", "Logic Analyzer"],
    },
  ],
  experience: [
    {
      company: "TC Electric, LLC",
      title: "Operations Engineer Intern",
      dateRange: "May 2025 - Aug. 2025",
      bullets: [
        "Improved visibility into field operations by developing Python scripts and Power BI dashboards that aggregated OpenSpace and project data into centralized, real-time operational views.",
        "Increased accuracy and traceability of asset and documentation tracking by automating data processing and normalization across OpenSpace datasets.",
        "Reduced manual coordination overhead for engineering and operations teams by integrating OpenSpace data into digital reporting and tracking workflows.",
      ],
    },
    {
      company: "Institute of Electrical and Electronics Engineers at Stony Brook University",
      title: "President",
      dateRange: "May 2025 - Present",
      bullets: [
        "Directing technical programming and professional events for the IEEE student chapter, expanding engagement and hands-on learning opportunities.",
        "Oversee planning and execution of multi-organization events by coordinating with faculty, sponsors, and IEEE regional leadership.",
        "Managing chapter operations, budgeting, and logistics to support consistent programming and hands-on engineering opportunities for members."
      ],
    },
    {
      company: "Stony Brook University Robotics Team",
      title: "Hardware Control Systems Lead",
      dateRange: "Aug. 2025 - Present",
      bullets: [
        "Lead the architecture and development of the MATE ROV motherboard built around an STM32 (LQFP-100), integrating power distribution and high-current actuator interfaces.",
        "Develop the control interface between the NVIDIA Jetson Nano and the STM32, enabling high-level commands from the Jetson to drive low-level actuator control.",
        "Perform system bring-up and validation through bench testing and debugging of control signals and power rails to ensure reliable operation.",
      ],
    },
  ],
  education: [
    {
      school: "Stony Brook University",
      degree: "Bachelor of Engineering in Electrical Engineering",
      dateRange: "2023 - 2027",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List all semesters",
        "President of IEEE Student Chapter",
      ],
    },
  ],
};
