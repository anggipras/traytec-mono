/* eslint-disable @typescript-eslint/naming-convention -- disable naming convention */
export type IconProps = {
  color?: string;
  size?: string;
  direction?: string;
  doubleIcon?: boolean;
} & React.SVGAttributes<SVGElement>;

export enum SmallIcon {
  "ADRESSE" = "ic_location",
  "TELEFON" = "ic_phone",
  "EMAIL" = "ic_email",
  "INSTAGRAM" = "ic_instagram",
  "META" = "ic_facebook",
  "X" = "ic_twitter",
  "LINKED_IN" = "ic_linkedin",
  "YOUTUBE" = "ic_youtube",
}
