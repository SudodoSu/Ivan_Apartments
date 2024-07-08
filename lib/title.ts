type TitleData = {
  title?: string;
  title2?: string;
  title3: string;
  Lota_title: string;
  Ruta_title: string;
  Ludwig_title: string;
  Benedikta_title: string;
  subtitle?: string;
  title5?: string;
  subtitle2?: string;
  button?: string;
  homepage_title?: string;
};

type DataObject = {
  data: TitleData[];
};

import enData from "@/messages/en.json";
// import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
// import itData from "@/messages/it.json";

const createTitle = (
  title: string,
  title2: string,
  title3: string,
  Lota_title: string,
  Ruta_title: string,
  Ludwig_title: string,
  Benedikta_title: string,
  title5?: string,
  button?: string,
  homepage_title?: string
): TitleData => {
  return {
    title,
    title2,
    title3,
    Lota_title,
    Ruta_title,
    Ludwig_title,
    Benedikta_title,
    title5,
    button,
    homepage_title,
  };
};

// Define the data object
export const TitleDataEn: DataObject = {
  data: [
    createTitle(
      enData.Titles.home,
      enData.Titles.Villa_Map_Location,
      enData.Titles.Availability_Calendar,
      enData.Titles.Price_list.Lota,
      enData.Titles.Price_list.Ruta,
      enData.Titles.Price_list.Ludwig,
      enData.Titles.Price_list.Benedikta,
      enData.Titles.Availability_Appointments_sub,
      enData.Buttons.Show_Gallery,
      enData.Titles.homepage_title
    ),
  ],
};

// You can also define a separate object for German translations if needed
// export const TitleDataDE: DataObject = {
//   data: [
//     createTitle(
//       deData.Titles.Villa_Relax,
//       deData.Titles.Villa_Map_Location,
//       deData.Titles.Availability_Calendar,
//       deData.Titles.Price_list,
//       deData.Titles.Availability_Appointments_sub,
//       deData.Titles.Surrondings,
//       deData.Titles.Surrondings_sub,
//       deData.Buttons.Show_Gallery,
//       deData.Titles.homepage_title
//     ),
//   ],
// };

export const TitleDataHR: DataObject = {
  data: [
    createTitle(
      hrData.Titles.home,
      hrData.Titles.Villa_Map_Location,
      hrData.Titles.Availability_Calendar,
      hrData.Titles.Price_list.Lota,
      hrData.Titles.Price_list.Ruta,
      hrData.Titles.Price_list.Ludwig,
      hrData.Titles.Price_list.Benedikta,
      hrData.Titles.Availability_Appointments_sub,
      hrData.Buttons.Show_Gallery,
      hrData.Titles.homepage_title
    ),
  ],
};

// export const TitleDataIT: DataObject = {
//   data: [
//     createTitle(
//       itData.Titles.Villa_Relax,
//       itData.Titles.Villa_Map_Location,
//       itData.Titles.Availability_Calendar,
//       itData.Titles.Price_list,
//       itData.Titles.Availability_Appointments_sub,
//       itData.Titles.Surrondings,
//       itData.Titles.Surrondings_sub,
//       itData.Buttons.Show_Gallery,
//       itData.Titles.homepage_title
//     ),
//   ],
// };

export const getTitleData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return TitleDataEn;
    // case "de":
    //   return TitleDataDE;
    case "hr":
      return TitleDataHR;
    // case "it":
    //   return TitleDataIT;
    default:
      // Return default language if specified language is not found
      return TitleDataEn;
  }
};
