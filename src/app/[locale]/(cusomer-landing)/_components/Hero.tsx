import { useTranslations } from "next-intl";
import Image from "next/image";

const CustomerHero = () => {
  const content = useTranslations("CustomerLandingpage");
  return (
    <section className="flex py-16 xl:py-20 container flex-col lg:flex-row lg:items-center gap-8">
      <div className="basis-full flex flex-col gap-y-12 lg:basis-[60%]">
        <div>
          <h1 className="text-[2.5rem] lg:text-[4.5rem] leading-[120%] lg:leading-[133%]">
            {content("HeroTitle")}
          </h1>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:max-w-[304px]">
          <button className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={144}
              className="h-[55px] w-full"
              height={42}
              viewBox="0 0 144 42"
              fill="none"
            >
              <path
                d="M143.199 37.1562C143.199 39.3944 141.366 41.2075 139.098 41.2075H4.90477C2.63843 41.2075 0.798828 39.3944 0.798828 37.1562V4.84889C0.798828 2.61171 2.63843 0.792358 4.90477 0.792358H139.097C141.366 0.792358 143.198 2.61171 143.198 4.84889L143.199 37.1562Z"
                fill="black"
              />
              <path
                d="M138.667 0.841315C141.136 0.841315 143.145 2.81925 143.145 5.25V36.75C143.145 39.1808 141.136 41.1587 138.667 41.1587H5.33333C2.864 41.1587 0.854666 39.1808 0.854666 36.75V5.25C0.854666 2.81925 2.864 0.841315 5.33333 0.841315H138.667ZM138.667 2.21967e-06H5.33333C2.40133 2.21967e-06 0 2.36381 0 5.25V36.75C0 39.6362 2.40133 42 5.33333 42H138.667C141.599 42 144 39.6362 144 36.75V5.25C144 2.36381 141.599 2.21967e-06 138.667 2.21967e-06Z"
                fill="#A6A6A6"
              />
              <path
                d="M32.1364 20.7733C32.1054 17.3892 34.9513 15.7428 35.0814 15.6661C33.4697 13.353 30.9716 13.0369 30.0937 13.0117C27.9956 12.7944 25.9604 14.2476 24.8916 14.2476C23.8014 14.2476 22.1556 13.0327 20.3817 13.0684C18.099 13.1031 15.9636 14.404 14.7924 16.4242C12.3753 20.5433 14.178 26.5966 16.4937 29.9261C17.6521 31.5568 19.0057 33.3775 20.7774 33.3134C22.5108 33.2431 23.1582 32.2256 25.25 32.2256C27.3225 32.2256 27.9305 33.3134 29.7374 33.2725C31.5977 33.2431 32.7689 31.6345 33.8868 29.9891C35.2254 28.1201 35.763 26.2795 35.7844 26.185C35.7406 26.1703 32.1716 24.8294 32.1364 20.7733Z"
                fill="white"
              />
              <path
                d="M28.723 10.8214C29.6553 9.67375 30.2932 8.1124 30.1161 6.52795C28.7668 6.58675 27.0793 7.4467 26.1076 8.56915C25.2478 9.55825 24.4798 11.1795 24.6782 12.7041C26.194 12.8154 27.7502 11.9512 28.723 10.8214Z"
                fill="white"
              />
              <path
                d="M57.2223 33.0792H54.7999L53.4729 28.9748H48.8607L47.5967 33.0792H45.2383L49.8079 19.1058H52.6303L57.2223 33.0792ZM53.0729 27.2528L51.8729 23.604C51.746 23.2313 51.5081 22.3535 51.1572 20.9717H51.1145C50.9748 21.566 50.7497 22.4438 50.4404 23.604L49.2617 27.2528H53.0729Z"
                fill="white"
              />
              <path
                d="M68.9743 27.9175C68.9743 29.6311 68.5039 30.9856 67.5631 31.9799C66.7204 32.8651 65.674 33.3071 64.4249 33.3071C63.0767 33.3071 62.1081 32.8304 61.5183 31.877H61.4756V37.1848H59.2015V26.3204C59.2015 25.2431 59.1727 24.1375 59.1172 23.0035H61.1172L61.2441 24.6005H61.2868C62.0452 23.3972 63.1961 22.7966 64.7407 22.7966C65.9481 22.7966 66.9561 23.266 67.7625 24.2057C68.5711 25.1465 68.9743 26.3834 68.9743 27.9175ZM66.6575 27.9994C66.6575 27.0187 66.4335 26.2102 65.9833 25.5739C65.4916 24.9103 64.8313 24.5785 64.0036 24.5785C63.4425 24.5785 62.9327 24.7633 62.4772 25.1276C62.0207 25.4951 61.722 25.975 61.5823 26.5693C61.5119 26.8465 61.4767 27.0733 61.4767 27.2518V28.9318C61.4767 29.6647 61.7049 30.2831 62.1615 30.7882C62.618 31.2932 63.2111 31.5452 63.9407 31.5452C64.7972 31.5452 65.4639 31.2197 65.9407 30.5708C66.4185 29.9209 66.6575 29.0641 66.6575 27.9994Z"
                fill="white"
              />
              <path
                d="M80.7466 27.9175C80.7466 29.6311 80.2762 30.9856 79.3344 31.9799C78.4928 32.8651 77.4464 33.3071 76.1973 33.3071C74.849 33.3071 73.8805 32.8304 73.2917 31.877H73.249V37.1848H70.9749V26.3204C70.9749 25.2431 70.9461 24.1375 70.8906 23.0035H72.8906L73.0176 24.6005H73.0602C73.8176 23.3972 74.9685 22.7966 76.5141 22.7966C77.7205 22.7966 78.7285 23.266 79.537 24.2057C80.3424 25.1465 80.7466 26.3834 80.7466 27.9175ZM78.4298 27.9994C78.4298 27.0187 78.2048 26.2102 77.7546 25.5739C77.2629 24.9103 76.6048 24.5785 75.776 24.5785C75.2138 24.5785 74.705 24.7633 74.2485 25.1276C73.792 25.4951 73.4944 25.975 73.3546 26.5693C73.2853 26.8465 73.249 27.0733 73.249 27.2518V28.9318C73.249 29.6647 73.4773 30.2831 73.9317 30.7882C74.3882 31.2922 74.9813 31.5452 75.713 31.5452C76.5696 31.5452 77.2362 31.2197 77.713 30.5708C78.1909 29.9209 78.4298 29.0641 78.4298 27.9994Z"
                fill="white"
              />
              <path
                d="M93.9099 29.1607C93.9099 30.3493 93.4907 31.3163 92.6491 32.0629C91.7243 32.8787 90.4369 33.2861 88.7825 33.2861C87.255 33.2861 86.0304 32.9963 85.1035 32.4157L85.6305 30.5498C86.6289 31.1441 87.7243 31.4423 88.9179 31.4423C89.7745 31.4423 90.4411 31.2512 90.9201 30.8711C91.3969 30.491 91.6347 29.9807 91.6347 29.3444C91.6347 28.7774 91.4384 28.2997 91.0448 27.9122C90.6534 27.5248 89.9995 27.1646 89.0864 26.8318C86.6011 25.9193 85.3595 24.5827 85.3595 22.825C85.3595 21.6763 85.7947 20.7344 86.6662 20.0015C87.5345 19.2676 88.6928 18.9011 90.1414 18.9011C91.4331 18.9011 92.5062 19.1227 93.3627 19.5647L92.7942 21.3896C91.9942 20.9612 91.0897 20.747 90.0774 20.747C89.2774 20.747 88.6523 20.9413 88.2043 21.3277C87.8257 21.6731 87.6358 22.0942 87.6358 22.5929C87.6358 23.1452 87.8523 23.602 88.2875 23.9611C88.6662 24.2929 89.3542 24.652 90.3526 25.0394C91.5739 25.5235 92.471 26.0894 93.0481 26.7383C93.623 27.3851 93.9099 28.1947 93.9099 29.1607Z"
                fill="white"
              />
              <path
                d="M101.429 24.6835H98.9222V29.5754C98.9222 30.8197 99.3638 31.4413 100.249 31.4413C100.656 31.4413 100.993 31.4066 101.259 31.3373L101.322 33.0373C100.874 33.2021 100.284 33.2851 99.5537 33.2851C98.6556 33.2851 97.9537 33.0152 97.447 32.4766C96.9425 31.9369 96.6886 31.0318 96.6886 29.7602V24.6814H95.1953V23.0014H96.6886V21.1565L98.9222 20.4929V23.0014H101.429V24.6835Z"
                fill="white"
              />
              <path
                d="M112.737 27.9585C112.737 29.5072 112.286 30.7788 111.388 31.7731C110.446 32.7969 109.196 33.3072 107.638 33.3072C106.136 33.3072 104.94 32.8168 104.049 31.8361C103.157 30.8554 102.711 29.6175 102.711 28.1254C102.711 26.5641 103.17 25.2852 104.09 24.2908C105.009 23.2954 106.248 22.7977 107.806 22.7977C109.308 22.7977 110.517 23.2881 111.429 24.2698C112.301 25.2222 112.737 26.4517 112.737 27.9585ZM110.377 28.0309C110.377 27.1017 110.175 26.3047 109.767 25.6401C109.29 24.8358 108.609 24.4347 107.725 24.4347C106.811 24.4347 106.117 24.8368 105.64 25.6401C105.231 26.3058 105.03 27.1153 105.03 28.0729C105.03 29.0022 105.231 29.7991 105.64 30.4627C106.132 31.267 106.819 31.6681 107.705 31.6681C108.573 31.6681 109.255 31.2586 109.747 30.4417C110.166 29.7645 110.377 28.9591 110.377 28.0309Z"
                fill="white"
              />
              <path
                d="M120.131 24.9722C119.906 24.9313 119.666 24.9103 119.414 24.9103C118.614 24.9103 117.995 25.2074 117.56 25.8028C117.181 26.3278 116.991 26.9914 116.991 27.7925V33.0793H114.718L114.74 26.1766C114.74 25.0153 114.711 23.9579 114.654 23.0045H116.635L116.718 24.9323H116.781C117.021 24.2698 117.4 23.7364 117.918 23.3363C118.425 22.9762 118.972 22.7966 119.562 22.7966C119.772 22.7966 119.962 22.8113 120.131 22.8376V24.9722Z"
                fill="white"
              />
              <path
                d="M130.3 27.5647C130.3 27.9658 130.273 28.3039 130.216 28.58H123.394C123.421 29.5754 123.75 30.3367 124.384 30.8617C124.959 31.331 125.702 31.5662 126.615 31.5662C127.626 31.5662 128.547 31.4077 129.376 31.0895L129.732 32.6435C128.764 33.0593 127.62 33.2662 126.301 33.2662C124.714 33.2662 123.468 32.8063 122.561 31.8875C121.656 30.9688 121.203 29.735 121.203 28.1873C121.203 26.668 121.624 25.4027 122.468 24.3937C123.351 23.3164 124.545 22.7777 126.047 22.7777C127.522 22.7777 128.639 23.3164 129.397 24.3937C129.998 25.2494 130.3 26.3078 130.3 27.5647ZM128.131 26.984C128.146 26.3204 127.998 25.7471 127.69 25.2631C127.296 24.6404 126.691 24.3296 125.877 24.3296C125.134 24.3296 124.529 24.6331 124.067 25.2421C123.688 25.7261 123.463 26.3068 123.394 26.983H128.131V26.984Z"
                fill="white"
              />
              <path
                d="M52.3202 10.5094C52.3202 11.7452 51.9436 12.6755 51.1916 13.3003C50.4951 13.8767 49.5052 14.1655 48.2231 14.1655C47.5874 14.1655 47.0434 14.1382 46.5879 14.0836V7.33103C47.182 7.23653 47.822 7.18823 48.5132 7.18823C49.7346 7.18823 50.6551 7.44968 51.2759 7.97258C51.9714 8.56373 52.3202 9.40898 52.3202 10.5094ZM51.1415 10.5398C51.1415 9.73868 50.926 9.12443 50.4951 8.69603C50.0642 8.26868 49.4348 8.05448 48.606 8.05448C48.254 8.05448 47.9543 8.07758 47.7058 8.12588V13.2593C47.8434 13.2803 48.0951 13.2898 48.461 13.2898C49.3164 13.2898 49.9767 13.0556 50.4418 12.5873C50.9068 12.119 51.1415 11.4365 51.1415 10.5398Z"
                fill="white"
              />
              <path
                d="M58.5713 11.5888C58.5713 12.35 58.3505 12.9737 57.9089 13.463C57.446 13.966 56.8326 14.2169 56.0668 14.2169C55.3286 14.2169 54.7409 13.9765 54.3025 13.4935C53.8652 13.0115 53.6465 12.4036 53.6465 11.6707C53.6465 10.9042 53.8715 10.2752 54.3238 9.78698C54.7761 9.29873 55.3841 9.05408 56.15 9.05408C56.8881 9.05408 57.4812 9.29453 57.9302 9.77648C58.3569 10.2448 58.5713 10.8496 58.5713 11.5888ZM57.4118 11.6245C57.4118 11.1677 57.3116 10.7761 57.1121 10.4495C56.8774 10.0547 56.5436 9.85733 56.1094 9.85733C55.6604 9.85733 55.319 10.0547 55.0844 10.4495C54.8838 10.7761 54.7846 11.174 54.7846 11.6444C54.7846 12.1012 54.8849 12.4928 55.0844 12.8194C55.3265 13.2142 55.6636 13.4116 56.0988 13.4116C56.5254 13.4116 56.8604 13.211 57.1014 12.8089C57.3084 12.476 57.4118 12.0812 57.4118 11.6245Z"
                fill="white"
              />
              <path
                d="M66.9474 9.15491L65.3741 14.1046H64.3501L63.6984 11.9553C63.533 11.4187 63.3986 10.8853 63.2941 10.3561H63.2738C63.1768 10.9 63.0424 11.4324 62.8696 11.9553L62.1773 14.1046H61.1416L59.6621 9.15491H60.8109L61.3794 11.508C61.517 12.0645 61.6301 12.5947 61.7208 13.0966H61.741C61.8242 12.6829 61.9618 12.1558 62.156 11.5185L62.8696 9.15596H63.7805L64.4642 11.4681C64.6296 12.0319 64.764 12.5748 64.8674 13.0977H64.8984C64.9741 12.5884 65.0882 12.0456 65.2397 11.4681L65.8498 9.15596H66.9474V9.15491Z"
                fill="white"
              />
              <path
                d="M72.7434 14.1047H71.6255V11.2697C71.6255 10.3961 71.2885 9.95928 70.6122 9.95928C70.2805 9.95928 70.0127 10.079 69.8047 10.3194C69.5989 10.5599 69.4943 10.8434 69.4943 11.1678V14.1036H68.3765V10.5693C68.3765 10.1346 68.3626 9.66318 68.3359 9.15288H69.3183L69.3706 9.92673H69.4015C69.5317 9.68628 69.7258 9.48783 69.9807 9.32928C70.2837 9.14448 70.6229 9.05103 70.9941 9.05103C71.4634 9.05103 71.8538 9.20013 72.1642 9.49938C72.5503 9.86583 72.7434 10.4129 72.7434 11.1395V14.1047Z"
                fill="white"
              />
              <path
                d="M75.8277 14.1046H74.7109V6.88379H75.8277V14.1046Z"
                fill="white"
              />
              <path
                d="M82.4092 11.5888C82.4092 12.35 82.1884 12.9737 81.7468 13.463C81.2838 13.966 80.6694 14.2169 79.9046 14.2169C79.1654 14.2169 78.5777 13.9765 78.1404 13.4935C77.703 13.0115 77.4844 12.4036 77.4844 11.6707C77.4844 10.9042 77.7094 10.2752 78.1617 9.78698C78.614 9.29873 79.222 9.05408 79.9868 9.05408C80.726 9.05408 81.318 9.29453 81.7681 9.77648C82.1948 10.2448 82.4092 10.8496 82.4092 11.5888ZM81.2486 11.6245C81.2486 11.1677 81.1484 10.7761 80.9489 10.4495C80.7153 10.0547 80.3804 9.85733 79.9473 9.85733C79.4972 9.85733 79.1558 10.0547 78.9222 10.4495C78.7217 10.7761 78.6225 11.174 78.6225 11.6444C78.6225 12.1012 78.7228 12.4928 78.9222 12.8194C79.1644 13.2142 79.5014 13.4116 79.9366 13.4116C80.3633 13.4116 80.6972 13.211 80.9382 12.8089C81.1462 12.476 81.2486 12.0812 81.2486 11.6245Z"
                fill="white"
              />
              <path
                d="M87.8194 14.1046H86.8157L86.7325 13.5344H86.7015C86.3581 13.9891 85.8685 14.2169 85.2327 14.2169C84.7581 14.2169 84.3741 14.0668 84.085 13.7686C83.8226 13.4977 83.6914 13.1606 83.6914 12.7606C83.6914 12.1558 83.9474 11.6948 84.4626 11.3756C84.9767 11.0564 85.6999 10.9 86.6311 10.9073V10.8149C86.6311 10.1629 86.2834 9.83738 85.5869 9.83738C85.0909 9.83738 84.6535 9.96023 84.2759 10.2038L84.0487 9.48143C84.5159 9.19688 85.093 9.05408 85.7735 9.05408C87.0877 9.05408 87.7469 9.73658 87.7469 11.1016V12.9244C87.7469 13.4189 87.7714 13.8127 87.8194 14.1046ZM86.6589 12.4036V11.6402C85.4258 11.6192 84.8093 11.9521 84.8093 12.6377C84.8093 12.896 84.8797 13.0892 85.0237 13.2184C85.1677 13.3475 85.3511 13.4116 85.5698 13.4116C85.8151 13.4116 86.0445 13.3349 86.2535 13.1827C86.4637 13.0294 86.5927 12.8351 86.6407 12.5968C86.6525 12.5432 86.6589 12.4781 86.6589 12.4036Z"
                fill="white"
              />
              <path
                d="M94.1711 14.1046H93.1791L93.1268 13.3098H93.0959C92.7791 13.9146 92.2394 14.217 91.481 14.217C90.8751 14.217 90.3706 13.9828 89.9706 13.5145C89.5706 13.0462 89.3711 12.4383 89.3711 11.6917C89.3711 10.8906 89.5876 10.2417 90.0228 9.74609C90.4442 9.28409 90.9604 9.05309 91.5748 9.05309C92.25 9.05309 92.7226 9.27674 92.9914 9.72509H93.0127V6.88379H94.1316V12.7711C94.1316 13.2531 94.1444 13.6972 94.1711 14.1046ZM93.0127 12.0172V11.1919C93.0127 11.0491 93.002 10.9336 92.9818 10.8454C92.9188 10.5808 92.7834 10.3582 92.5775 10.1787C92.3695 9.99914 92.1188 9.90884 91.8297 9.90884C91.4127 9.90884 91.0863 10.0716 90.8463 10.3981C90.6084 10.7247 90.4879 11.1415 90.4879 11.6508C90.4879 12.1401 90.602 12.537 90.8314 12.8425C91.0735 13.168 91.3999 13.3308 91.8084 13.3308C92.1754 13.3308 92.4687 13.1953 92.6916 12.9234C92.9071 12.6724 93.0127 12.37 93.0127 12.0172Z"
                fill="white"
              />
              <path
                d="M103.731 11.5888C103.731 12.35 103.511 12.9737 103.069 13.463C102.606 13.966 101.994 14.2169 101.227 14.2169C100.49 14.2169 99.9021 13.9765 99.4626 13.4935C99.0253 13.0115 98.8066 12.4036 98.8066 11.6707C98.8066 10.9042 99.0317 10.2752 99.484 9.78698C99.9362 9.29873 100.544 9.05408 101.311 9.05408C102.048 9.05408 102.642 9.29453 103.09 9.77648C103.517 10.2448 103.731 10.8496 103.731 11.5888ZM102.573 11.6245C102.573 11.1677 102.473 10.7761 102.273 10.4495C102.038 10.0547 101.705 9.85733 101.27 9.85733C100.822 9.85733 100.48 10.0547 100.245 10.4495C100.044 10.7761 99.9448 11.174 99.9448 11.6444C99.9448 12.1012 100.045 12.4928 100.245 12.8194C100.487 13.2142 100.824 13.4116 101.259 13.4116C101.686 13.4116 102.022 13.211 102.263 12.8089C102.469 12.476 102.573 12.0812 102.573 11.6245Z"
                fill="white"
              />
              <path
                d="M109.742 14.1047H108.626V11.2697C108.626 10.3961 108.288 9.95928 107.611 9.95928C107.279 9.95928 107.012 10.079 106.805 10.3194C106.598 10.5599 106.494 10.8434 106.494 11.1678V14.1036H105.375V10.5693C105.375 10.1346 105.363 9.66318 105.336 9.15288H106.317L106.37 9.92673H106.4C106.532 9.68628 106.726 9.48783 106.98 9.32928C107.284 9.14448 107.622 9.05103 107.994 9.05103C108.462 9.05103 108.853 9.20013 109.163 9.49938C109.55 9.86583 109.742 10.4129 109.742 11.1395V14.1047Z"
                fill="white"
              />
              <path
                d="M117.264 9.97919H116.033V12.3837C116.033 12.9948 116.251 13.3003 116.684 13.3003C116.885 13.3003 117.051 13.2835 117.182 13.2489L117.211 14.0836C116.991 14.1655 116.7 14.2065 116.343 14.2065C115.901 14.2065 115.558 14.0742 115.309 13.8096C115.06 13.545 114.936 13.0998 114.936 12.475V9.97919H114.201V9.15494H114.936V8.24774L116.032 7.92224V9.15389H117.262V9.97919H117.264Z"
                fill="white"
              />
              <path
                d="M123.183 14.1046H122.064V11.2906C122.064 10.4034 121.727 9.95924 121.052 9.95924C120.534 9.95924 120.18 10.2165 119.985 10.731C119.952 10.8391 119.933 10.9714 119.933 11.1268V14.1036H118.816V6.88379H119.933V9.86684H119.955C120.307 9.32399 120.811 9.05309 121.465 9.05309C121.928 9.05309 122.311 9.20219 122.615 9.50144C122.993 9.87419 123.183 10.4286 123.183 11.1615V14.1046Z"
                fill="white"
              />
              <path
                d="M129.289 11.3956C129.289 11.593 129.274 11.7589 129.247 11.8944H125.895C125.91 12.3837 126.07 12.7564 126.38 13.0147C126.664 13.2457 127.03 13.3612 127.478 13.3612C127.974 13.3612 128.426 13.2835 128.833 13.1271L129.008 13.8915C128.531 14.0952 127.97 14.197 127.321 14.197C126.542 14.197 125.929 13.9713 125.485 13.5198C125.039 13.0683 124.818 12.4624 124.818 11.7022C124.818 10.9557 125.024 10.3341 125.439 9.83848C125.872 9.30928 126.458 9.04468 127.197 9.04468C127.92 9.04468 128.47 9.30928 128.841 9.83848C129.14 10.2585 129.289 10.7782 129.289 11.3956ZM128.222 11.1111C128.231 10.7845 128.157 10.5031 128.006 10.2658C127.811 9.96028 127.516 9.80698 127.116 9.80698C126.751 9.80698 126.454 9.95608 126.226 10.2553C126.041 10.4937 125.931 10.7782 125.895 11.1111H128.222Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="w-full">
            <Image
              src={"/images/googleplay.svg"}
              alt="googleplay"
              width={400}
              className="h-[55px] w-full"
              height={65}
            />
          </button>
        </div>
      </div>
      <div className="basis-full lg:basis-[40%]">
        <Image
          src={"/images/customer-hero-phone.png"}
          alt="customer-hero-phone"
          className=" object-contain block ml-auto"
          width={360}
          height={600}
        />
      </div>
    </section>
  );
};

export default CustomerHero;
