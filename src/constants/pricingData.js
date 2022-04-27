let icon = (
  <svg
    width="179"
    height="158"
    viewBox="0 0 179 158"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
      fill="url(#paint0_linear_70:153)"
    />
    <path
      opacity="0.3"
      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
      fill="url(#paint1_linear_70:153)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_70:153"
        x1="69.6694"
        y1="29.9033"
        x2="196.108"
        y2="83.2919"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A6CF7" stop-opacity="0.62" />
        <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_70:153"
        x1="165.348"
        y1="-75.4466"
        x2="-3.75136"
        y2="103.645"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A6CF7" stop-opacity="0.62" />
        <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

let xicon = (
  <svg width="8" height="6" viewBox="0 0 8 6" className="a26">
    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
  </svg>
);

export const pricingData = [
  {
    price: "40",
    category: "Lite",
    desc: "Lorem ipsum dolor sit six months elit Mauris egestas enim.",
    xicon: xicon,
    x1: "All UI Components",
    x2: "Use with Unlimited Projects",
    x3: "Commercial Use",
    x4: "Email Support",
    x5: "Renew After 6 Months",
    x6: "Free 3 Months Updates",
    icon: icon,
  },
  {
    price: "399",
    category: "Basic",
    desc: "Lorem ipsum dolor sit one year elit Mauris egestas enim.",
    xicon: xicon,
    x1: "All UI Components",
    x2: "Use with Unlimited Projects",
    x3: "Commercial Use",
    x4: "Email Support",
    x5: "Renew every Year",
    x6: "Free 6 Months Updates",
    icon: icon,
  },
  {
    price: "589",
    category: "Plus",
    desc: "Lorem ipsum dolor sit lifetime elit Mauris egestas enim.",
    xicon: xicon,
    x1: "All UI Components",
    x2: "Use with Unlimited Projects",
    x3: "Commercial Use",
    x4: "Email Support",
    x5: "Lifetime Access",
    x6: "Free Lifetime Updates",
    icon: icon,
  },
];
