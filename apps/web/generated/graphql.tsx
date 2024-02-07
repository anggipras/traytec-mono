import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  FormularFragenDynamicZoneInput: any;
  I18NLocaleCode: any;
  JSON: any;
  SeiteInhalteDynamicZoneInput: any;
  Upload: any;
};

export type Bewertung = {
  __typename?: 'Bewertung';
  createdAt?: Maybe<Scalars['DateTime']>;
  external_id?: Maybe<Scalars['String']>;
  kommentar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  person?: Maybe<Array<Maybe<ComponentUtilsGoogleReviewer>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  quelle?: Maybe<Enum_Bewertung_Quelle>;
  sterne_bewertung?: Maybe<Enum_Bewertung_Sterne_Bewertung>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BewertungPersonArgs = {
  filters?: InputMaybe<ComponentUtilsGoogleReviewerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BewertungEntity = {
  __typename?: 'BewertungEntity';
  attributes?: Maybe<Bewertung>;
  id?: Maybe<Scalars['ID']>;
};

export type BewertungEntityResponse = {
  __typename?: 'BewertungEntityResponse';
  data?: Maybe<BewertungEntity>;
};

export type BewertungEntityResponseCollection = {
  __typename?: 'BewertungEntityResponseCollection';
  data: Array<BewertungEntity>;
  meta: ResponseCollectionMeta;
};

export type BewertungFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BewertungFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  external_id?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  kommentar?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BewertungFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BewertungFiltersInput>>>;
  person?: InputMaybe<ComponentUtilsGoogleReviewerFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quelle?: InputMaybe<StringFilterInput>;
  sterne_bewertung?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BewertungInput = {
  external_id?: InputMaybe<Scalars['String']>;
  kommentar?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<Array<InputMaybe<ComponentUtilsGoogleReviewerInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  quelle?: InputMaybe<Enum_Bewertung_Quelle>;
  sterne_bewertung?: InputMaybe<Enum_Bewertung_Sterne_Bewertung>;
};

export type BewertungRelationResponseCollection = {
  __typename?: 'BewertungRelationResponseCollection';
  data: Array<BewertungEntity>;
};

export type Blog = {
  __typename?: 'Blog';
  auszug?: Maybe<Scalars['String']>;
  blog_kategorien?: Maybe<BlogKategorieRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inhalt?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlogRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  titel: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BlogBlog_KategorienArgs = {
  filters?: InputMaybe<BlogKategorieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BlogLocalizationsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  auszug?: InputMaybe<StringFilterInput>;
  blog_kategorien?: InputMaybe<BlogKategorieFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inhalt?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogFiltersInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  titel?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  auszug?: InputMaybe<Scalars['String']>;
  blog_kategorien?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  inhalt?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  titel?: InputMaybe<Scalars['String']>;
};

export type BlogKategorie = {
  __typename?: 'BlogKategorie';
  blogs?: Maybe<BlogRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlogKategorieRelationResponseCollection>;
  titel: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BlogKategorieBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BlogKategorieLocalizationsArgs = {
  filters?: InputMaybe<BlogKategorieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlogKategorieEntity = {
  __typename?: 'BlogKategorieEntity';
  attributes?: Maybe<BlogKategorie>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogKategorieEntityResponse = {
  __typename?: 'BlogKategorieEntityResponse';
  data?: Maybe<BlogKategorieEntity>;
};

export type BlogKategorieEntityResponseCollection = {
  __typename?: 'BlogKategorieEntityResponseCollection';
  data: Array<BlogKategorieEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogKategorieFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogKategorieFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogKategorieFiltersInput>;
  not?: InputMaybe<BlogKategorieFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogKategorieFiltersInput>>>;
  titel?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogKategorieInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  titel?: InputMaybe<Scalars['String']>;
};

export type BlogKategorieRelationResponseCollection = {
  __typename?: 'BlogKategorieRelationResponseCollection';
  data: Array<BlogKategorieEntity>;
};

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentFormAntwortmoeglichkeit = {
  __typename?: 'ComponentFormAntwortmoeglichkeit';
  antwort?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  overwrite_email?: Maybe<Scalars['String']>;
};

export type ComponentFormAntwortmoeglichkeitFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFormAntwortmoeglichkeitFiltersInput>>>;
  antwort?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFormAntwortmoeglichkeitFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormAntwortmoeglichkeitFiltersInput>>>;
  overwrite_email?: InputMaybe<StringFilterInput>;
};

export type ComponentFormDatum = {
  __typename?: 'ComponentFormDatum';
  frage: Scalars['String'];
  id: Scalars['ID'];
  notwendig?: Maybe<Scalars['Boolean']>;
};

export type ComponentFormDatumUhrzeit = {
  __typename?: 'ComponentFormDatumUhrzeit';
  frage: Scalars['String'];
  id: Scalars['ID'];
  notwendig?: Maybe<Scalars['Boolean']>;
};

export type ComponentFormLongText = {
  __typename?: 'ComponentFormLongText';
  frage: Scalars['String'];
  id: Scalars['ID'];
  notwendig?: Maybe<Scalars['Boolean']>;
};

export type ComponentFormMultipleChoice = {
  __typename?: 'ComponentFormMultipleChoice';
  frage: Scalars['String'];
  id: Scalars['ID'];
  moeglichkeit?: Maybe<Array<Maybe<ComponentFormAntwortmoeglichkeit>>>;
  notwendig?: Maybe<Scalars['Boolean']>;
};


export type ComponentFormMultipleChoiceMoeglichkeitArgs = {
  filters?: InputMaybe<ComponentFormAntwortmoeglichkeitFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFormTextForm = {
  __typename?: 'ComponentFormTextForm';
  frage: Scalars['String'];
  id: Scalars['ID'];
  notwendig?: Maybe<Scalars['Boolean']>;
};

export type ComponentFormUhrzeit = {
  __typename?: 'ComponentFormUhrzeit';
  frage: Scalars['String'];
  id: Scalars['ID'];
  notwendig?: Maybe<Scalars['Boolean']>;
};

export type ComponentHeadingsHeadingMinimalistisch = {
  __typename?: 'ComponentHeadingsHeadingMinimalistisch';
  ausrichtung?: Maybe<Enum_Componentheadingsheadingminimalistisch_Ausrichtung>;
  beschreibung?: Maybe<Scalars['String']>;
  bild?: Maybe<UploadFileEntityResponse>;
  dekoration_anzeigen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  titel: Scalars['String'];
};

export type ComponentHeadingsHeadingMitVideo = {
  __typename?: 'ComponentHeadingsHeadingMitVideo';
  id: Scalars['ID'];
  media?: Maybe<UploadFileEntityResponse>;
  ueberschrift?: Maybe<ComponentUtilsHeading>;
};

export type ComponentHerosHero1 = {
  __typename?: 'ComponentHerosHero1';
  button?: Maybe<Array<Maybe<ComponentUtilsButton>>>;
  hintergrund?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  sichtbar: Scalars['Boolean'];
  ueberschrift?: Maybe<ComponentUtilsHeading>;
};


export type ComponentHerosHero1ButtonArgs = {
  filters?: InputMaybe<ComponentUtilsButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIntegrationenBewertungen = {
  __typename?: 'ComponentIntegrationenBewertungen';
  alle_anzeigen?: Maybe<Scalars['Boolean']>;
  bewertungen?: Maybe<BewertungRelationResponseCollection>;
  id: Scalars['ID'];
  ueberschrift?: Maybe<ComponentUtilsHeading>;
};


export type ComponentIntegrationenBewertungenBewertungenArgs = {
  filters?: InputMaybe<BewertungFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentIntegrationenFormular = {
  __typename?: 'ComponentIntegrationenFormular';
  formular?: Maybe<FormularEntityResponse>;
  id: Scalars['ID'];
  sichtbar: Scalars['Boolean'];
};

export type ComponentIntegrationenJobs = {
  __typename?: 'ComponentIntegrationenJobs';
  STYLE: Enum_Componentintegrationenjobs_Style;
  alle_anzeigen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  jobs?: Maybe<JobRelationResponseCollection>;
};


export type ComponentIntegrationenJobsJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentListenGridListe = {
  __typename?: 'ComponentListenGridListe';
  id: Scalars['ID'];
  inhalt?: Maybe<Array<Maybe<ComponentUtilsGridElement>>>;
  ueberschrift?: Maybe<ComponentUtilsHeading>;
};


export type ComponentListenGridListeInhaltArgs = {
  filters?: InputMaybe<ComponentUtilsGridElementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentListenIndustrieListe = {
  __typename?: 'ComponentListenIndustrieListe';
  id: Scalars['ID'];
  industrien?: Maybe<IndustrieRelationResponseCollection>;
};


export type ComponentListenIndustrieListeIndustrienArgs = {
  filters?: InputMaybe<IndustrieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentListenTimelineListe = {
  __typename?: 'ComponentListenTimelineListe';
  id: Scalars['ID'];
  timeline_karten?: Maybe<Array<Maybe<ComponentUtilsTimelineKarte>>>;
  ueberschrift?: Maybe<ComponentUtilsHeading>;
};


export type ComponentListenTimelineListeTimeline_KartenArgs = {
  filters?: InputMaybe<ComponentUtilsTimelineKarteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSektionenInhaltMitMedia = {
  __typename?: 'ComponentSektionenInhaltMitMedia';
  MEDIA_POSITION: Enum_Componentsektioneninhaltmitmedia_Media_Position;
  id: Scalars['ID'];
  media: UploadFileEntityResponse;
  ueberschrift?: Maybe<ComponentUtilsHeading>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  social_network: Enum_Componentsharedmetasocial_Social_Network;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  social_network?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  social_network?: InputMaybe<Enum_Componentsharedmetasocial_Social_Network>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonical_URL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  meta_description: Scalars['String'];
  meta_image?: Maybe<UploadFileEntityResponse>;
  meta_robots?: Maybe<Scalars['String']>;
  meta_title: Scalars['String'];
  meta_viewport?: Maybe<Scalars['String']>;
  structured_data?: Maybe<Scalars['JSON']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonical_URL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  meta_description?: InputMaybe<StringFilterInput>;
  meta_robots?: InputMaybe<StringFilterInput>;
  meta_title?: InputMaybe<StringFilterInput>;
  meta_viewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structured_data?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonical_URL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_image?: InputMaybe<Scalars['ID']>;
  meta_robots?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  meta_viewport?: InputMaybe<Scalars['String']>;
  structured_data?: InputMaybe<Scalars['JSON']>;
};

export type ComponentSliderHorizontalerSlider = {
  __typename?: 'ComponentSliderHorizontalerSlider';
  cards?: Maybe<Array<Maybe<ComponentSliderSliderCard>>>;
  id: Scalars['ID'];
  sichtbar: Scalars['Boolean'];
  uberschrift?: Maybe<ComponentUtilsHeading>;
};


export type ComponentSliderHorizontalerSliderCardsArgs = {
  filters?: InputMaybe<ComponentSliderSliderCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSliderHorizontalerSliderFokus = {
  __typename?: 'ComponentSliderHorizontalerSliderFokus';
  autoplay?: Maybe<ComponentUtilsAutoplayEinstellungen>;
  background_anzeigen?: Maybe<Scalars['Boolean']>;
  button?: Maybe<ComponentUtilsButton>;
  cards?: Maybe<Array<Maybe<ComponentSliderSliderCard2>>>;
  id: Scalars['ID'];
  karten_ausserhalb_anzeigen?: Maybe<Scalars['Boolean']>;
  sichtbar: Scalars['Boolean'];
  ueberschrift?: Maybe<ComponentUtilsHeading>;
};


export type ComponentSliderHorizontalerSliderFokusCardsArgs = {
  filters?: InputMaybe<ComponentSliderSliderCard2FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSliderSliderCard = {
  __typename?: 'ComponentSliderSliderCard';
  icon?: Maybe<UploadFileEntityResponse>;
  icon_text?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  ueberschrift?: Maybe<Scalars['String']>;
};

export type ComponentSliderSliderCard2 = {
  __typename?: 'ComponentSliderSliderCard2';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  medien?: Maybe<UploadFileRelationResponseCollection>;
  text?: Maybe<Scalars['String']>;
  ueberschrift?: Maybe<Scalars['String']>;
  vorteile?: Maybe<Scalars['String']>;
};


export type ComponentSliderSliderCard2MedienArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSliderSliderCard2FiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSliderSliderCard2FiltersInput>>>;
  not?: InputMaybe<ComponentSliderSliderCard2FiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSliderSliderCard2FiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  ueberschrift?: InputMaybe<StringFilterInput>;
  vorteile?: InputMaybe<StringFilterInput>;
};

export type ComponentSliderSliderCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSliderSliderCardFiltersInput>>>;
  icon_text?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSliderSliderCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSliderSliderCardFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  ueberschrift?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsAutoplayEinstellungen = {
  __typename?: 'ComponentUtilsAutoplayEinstellungen';
  dauer?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  ist_aktiv?: Maybe<Scalars['Boolean']>;
};

export type ComponentUtilsBadge = {
  __typename?: 'ComponentUtilsBadge';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentUtilsBadgeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsBadgeFiltersInput>>>;
  not?: InputMaybe<ComponentUtilsBadgeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsBadgeFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsBadgeInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsButton = {
  __typename?: 'ComponentUtilsButton';
  id: Scalars['ID'];
  text: Scalars['String'];
  url: Scalars['String'];
  variante: Enum_Componentutilsbutton_Variante;
};

export type ComponentUtilsButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsButtonFiltersInput>>>;
  not?: InputMaybe<ComponentUtilsButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsButtonFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  variante?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsGoogleReviewer = {
  __typename?: 'ComponentUtilsGoogleReviewer';
  id: Scalars['ID'];
  ist_anonym?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
};

export type ComponentUtilsGoogleReviewerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsGoogleReviewerFiltersInput>>>;
  ist_anonym?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsGoogleReviewerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsGoogleReviewerFiltersInput>>>;
  photo_url?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsGoogleReviewerInput = {
  id?: InputMaybe<Scalars['ID']>;
  ist_anonym?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  photo_url?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsGridElement = {
  __typename?: 'ComponentUtilsGridElement';
  bild?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
};

export type ComponentUtilsGridElementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsGridElementFiltersInput>>>;
  not?: InputMaybe<ComponentUtilsGridElementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsGridElementFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  titel?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsHeading = {
  __typename?: 'ComponentUtilsHeading';
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  topline?: Maybe<Scalars['String']>;
  typ: Enum_Componentutilsheading_Typ;
};

export type ComponentUtilsHeadingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsHeadingFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsHeadingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsHeadingFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  topline?: InputMaybe<StringFilterInput>;
  typ?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsHeadingInput = {
  heading?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  topline?: InputMaybe<Scalars['String']>;
  typ?: InputMaybe<Enum_Componentutilsheading_Typ>;
};

export type ComponentUtilsJobsEinstellungen = {
  __typename?: 'ComponentUtilsJobsEinstellungen';
  button_inhalt?: Maybe<Scalars['String']>;
  button_url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type ComponentUtilsJobsEinstellungenInput = {
  button_inhalt?: InputMaybe<Scalars['String']>;
  button_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsKontakt = {
  __typename?: 'ComponentUtilsKontakt';
  id: Scalars['ID'];
  inhalt?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentutilskontakt_Type>;
};

export type ComponentUtilsKontaktFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsKontaktFiltersInput>>>;
  inhalt?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsKontaktFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsKontaktFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsKontaktInput = {
  id?: InputMaybe<Scalars['ID']>;
  inhalt?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Componentutilskontakt_Type>;
};

export type ComponentUtilsLogo = {
  __typename?: 'ComponentUtilsLogo';
  id: Scalars['ID'];
  logo_dunkel?: Maybe<UploadFileRelationResponseCollection>;
  logo_hell?: Maybe<UploadFileEntityResponse>;
  logo_standard: UploadFileEntityResponse;
};


export type ComponentUtilsLogoLogo_DunkelArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentUtilsLogoInput = {
  id?: InputMaybe<Scalars['ID']>;
  logo_dunkel?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  logo_hell?: InputMaybe<Scalars['ID']>;
  logo_standard?: InputMaybe<Scalars['ID']>;
};

export type ComponentUtilsSocialMedia = {
  __typename?: 'ComponentUtilsSocialMedia';
  id: Scalars['ID'];
  typ?: Maybe<Enum_Componentutilssocialmedia_Typ>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentUtilsSocialMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsSocialMediaFiltersInput>>>;
  not?: InputMaybe<ComponentUtilsSocialMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsSocialMediaFiltersInput>>>;
  typ?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsSocialMediaInput = {
  id?: InputMaybe<Scalars['ID']>;
  typ?: InputMaybe<Enum_Componentutilssocialmedia_Typ>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsText = {
  __typename?: 'ComponentUtilsText';
  id: Scalars['ID'];
  inhalt?: Maybe<Scalars['String']>;
};

export type ComponentUtilsTimelineKarte = {
  __typename?: 'ComponentUtilsTimelineKarte';
  beschreibung?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<UploadFileEntityResponse>;
  titel: Scalars['String'];
  zeitpunkt: Scalars['Date'];
};

export type ComponentUtilsTimelineKarteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsTimelineKarteFiltersInput>>>;
  beschreibung?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsTimelineKarteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsTimelineKarteFiltersInput>>>;
  titel?: InputMaybe<StringFilterInput>;
  zeitpunkt?: InputMaybe<DateFilterInput>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Bewertung_Quelle {
  Custom = 'CUSTOM',
  Google = 'GOOGLE'
}

export enum Enum_Bewertung_Sterne_Bewertung {
  Five = 'FIVE',
  Four = 'FOUR',
  One = 'ONE',
  StarRatingUnspecified = 'STAR_RATING_UNSPECIFIED',
  Three = 'THREE',
  Two = 'TWO'
}

export enum Enum_Componentheadingsheadingminimalistisch_Ausrichtung {
  Links = 'LINKS',
  Zentriert = 'ZENTRIERT'
}

export enum Enum_Componentintegrationenjobs_Style {
  Grid = 'GRID',
  VolleBreite = 'VOLLE_BREITE'
}

export enum Enum_Componentsektioneninhaltmitmedia_Media_Position {
  Links = 'LINKS',
  Rechts = 'RECHTS'
}

export enum Enum_Componentsharedmetasocial_Social_Network {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Componentutilsbutton_Variante {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Text = 'TEXT'
}

export enum Enum_Componentutilsheading_Typ {
  H1 = 'H1',
  H2 = 'H2'
}

export enum Enum_Componentutilskontakt_Type {
  Adresse = 'ADRESSE',
  Email = 'EMAIL',
  Telefon = 'TELEFON'
}

export enum Enum_Componentutilssocialmedia_Typ {
  Instagram = 'INSTAGRAM',
  LinkedIn = 'LINKED_IN',
  Meta = 'META',
  X = 'X',
  Youtube = 'YOUTUBE'
}

export enum Enum_Job_Art {
  Ausbildung = 'AUSBILDUNG',
  MiniJob = 'MINI_JOB',
  Teilzeit = 'TEILZEIT',
  Vollzeit = 'VOLLZEIT'
}

export enum Enum_Navigationnavigationitem_Type {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
  Wrapper = 'WRAPPER'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Formular = {
  __typename?: 'Formular';
  Fragen: Array<Maybe<FormularFragenDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email_empfaenger?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  ueberschrift?: Maybe<ComponentUtilsHeading>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FormularEntity = {
  __typename?: 'FormularEntity';
  attributes?: Maybe<Formular>;
  id?: Maybe<Scalars['ID']>;
};

export type FormularEntityResponse = {
  __typename?: 'FormularEntityResponse';
  data?: Maybe<FormularEntity>;
};

export type FormularEntityResponseCollection = {
  __typename?: 'FormularEntityResponseCollection';
  data: Array<FormularEntity>;
  meta: ResponseCollectionMeta;
};

export type FormularFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FormularFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email_empfaenger?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FormularFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FormularFiltersInput>>>;
  titel?: InputMaybe<StringFilterInput>;
  ueberschrift?: InputMaybe<ComponentUtilsHeadingFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FormularFragenDynamicZone = ComponentFormDatum | ComponentFormDatumUhrzeit | ComponentFormLongText | ComponentFormMultipleChoice | ComponentFormTextForm | ComponentFormUhrzeit | Error;

export type FormularInput = {
  Fragen?: InputMaybe<Array<Scalars['FormularFragenDynamicZoneInput']>>;
  email_empfaenger?: InputMaybe<Scalars['String']>;
  titel?: InputMaybe<Scalars['String']>;
  ueberschrift?: InputMaybe<ComponentUtilsHeadingInput>;
};

export type GenericMorph = Bewertung | Blog | BlogKategorie | ComponentFormAntwortmoeglichkeit | ComponentFormDatum | ComponentFormDatumUhrzeit | ComponentFormLongText | ComponentFormMultipleChoice | ComponentFormTextForm | ComponentFormUhrzeit | ComponentHeadingsHeadingMinimalistisch | ComponentHeadingsHeadingMitVideo | ComponentHerosHero1 | ComponentIntegrationenBewertungen | ComponentIntegrationenFormular | ComponentIntegrationenJobs | ComponentListenGridListe | ComponentListenIndustrieListe | ComponentListenTimelineListe | ComponentSektionenInhaltMitMedia | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentSliderHorizontalerSlider | ComponentSliderHorizontalerSliderFokus | ComponentSliderSliderCard | ComponentSliderSliderCard2 | ComponentUtilsAutoplayEinstellungen | ComponentUtilsBadge | ComponentUtilsButton | ComponentUtilsGoogleReviewer | ComponentUtilsGridElement | ComponentUtilsHeading | ComponentUtilsJobsEinstellungen | ComponentUtilsKontakt | ComponentUtilsLogo | ComponentUtilsSocialMedia | ComponentUtilsText | ComponentUtilsTimelineKarte | Formular | I18NLocale | Industrie | Job | NavigationAudience | NavigationNavigation | NavigationNavigationItem | NavigationNavigationsItemsRelated | Produkt | Seite | SeitenEinstellung | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Industrie = {
  __typename?: 'Industrie';
  alle_anzeigen?: Maybe<Scalars['Boolean']>;
  beschreibung?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<IndustrieRelationResponseCollection>;
  produkte?: Maybe<ProduktRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vorschau?: Maybe<UploadFileEntityResponse>;
};


export type IndustrieLocalizationsArgs = {
  filters?: InputMaybe<IndustrieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IndustrieProdukteArgs = {
  filters?: InputMaybe<ProduktFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IndustrieEntity = {
  __typename?: 'IndustrieEntity';
  attributes?: Maybe<Industrie>;
  id?: Maybe<Scalars['ID']>;
};

export type IndustrieEntityResponse = {
  __typename?: 'IndustrieEntityResponse';
  data?: Maybe<IndustrieEntity>;
};

export type IndustrieEntityResponseCollection = {
  __typename?: 'IndustrieEntityResponseCollection';
  data: Array<IndustrieEntity>;
  meta: ResponseCollectionMeta;
};

export type IndustrieFiltersInput = {
  alle_anzeigen?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IndustrieFiltersInput>>>;
  beschreibung?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<IndustrieFiltersInput>;
  not?: InputMaybe<IndustrieFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IndustrieFiltersInput>>>;
  produkte?: InputMaybe<ProduktFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  titel?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IndustrieInput = {
  alle_anzeigen?: InputMaybe<Scalars['Boolean']>;
  beschreibung?: InputMaybe<Scalars['String']>;
  produkte?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  titel?: InputMaybe<Scalars['String']>;
  vorschau?: InputMaybe<Scalars['ID']>;
};

export type IndustrieRelationResponseCollection = {
  __typename?: 'IndustrieRelationResponseCollection';
  data: Array<IndustrieEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Job = {
  __typename?: 'Job';
  art: Enum_Job_Art;
  auszug?: Maybe<Scalars['String']>;
  badges?: Maybe<Array<Maybe<ComponentUtilsBadge>>>;
  beschreibung?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<JobRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  titel: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type JobBadgesArgs = {
  filters?: InputMaybe<ComponentUtilsBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type JobLocalizationsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JobEntity = {
  __typename?: 'JobEntity';
  attributes?: Maybe<Job>;
  id?: Maybe<Scalars['ID']>;
};

export type JobEntityResponse = {
  __typename?: 'JobEntityResponse';
  data?: Maybe<JobEntity>;
};

export type JobEntityResponseCollection = {
  __typename?: 'JobEntityResponseCollection';
  data: Array<JobEntity>;
  meta: ResponseCollectionMeta;
};

export type JobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  art?: InputMaybe<StringFilterInput>;
  auszug?: InputMaybe<StringFilterInput>;
  badges?: InputMaybe<ComponentUtilsBadgeFiltersInput>;
  beschreibung?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<JobFiltersInput>;
  not?: InputMaybe<JobFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  titel?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobInput = {
  art?: InputMaybe<Enum_Job_Art>;
  auszug?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<Array<InputMaybe<ComponentUtilsBadgeInput>>>;
  beschreibung?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  titel?: InputMaybe<Scalars['String']>;
};

export type JobRelationResponseCollection = {
  __typename?: 'JobRelationResponseCollection';
  data: Array<JobEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBewertung?: Maybe<BewertungEntityResponse>;
  createBlog?: Maybe<BlogEntityResponse>;
  createBlogKategorie?: Maybe<BlogKategorieEntityResponse>;
  createBlogKategorieLocalization?: Maybe<BlogKategorieEntityResponse>;
  createBlogLocalization?: Maybe<BlogEntityResponse>;
  createFormular?: Maybe<FormularEntityResponse>;
  createIndustrie?: Maybe<IndustrieEntityResponse>;
  createIndustrieLocalization?: Maybe<IndustrieEntityResponse>;
  createJob?: Maybe<JobEntityResponse>;
  createJobLocalization?: Maybe<JobEntityResponse>;
  createNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  createNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  createNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  createNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  createProdukt?: Maybe<ProduktEntityResponse>;
  createProduktLocalization?: Maybe<ProduktEntityResponse>;
  createSeite?: Maybe<SeiteEntityResponse>;
  createSeiteLocalization?: Maybe<SeiteEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBewertung?: Maybe<BewertungEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteBlogKategorie?: Maybe<BlogKategorieEntityResponse>;
  deleteFormular?: Maybe<FormularEntityResponse>;
  deleteIndustrie?: Maybe<IndustrieEntityResponse>;
  deleteJob?: Maybe<JobEntityResponse>;
  deleteNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  deleteNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  deleteNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  deleteNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  deleteProdukt?: Maybe<ProduktEntityResponse>;
  deleteSeite?: Maybe<SeiteEntityResponse>;
  deleteSeitenEinstellung?: Maybe<SeitenEinstellungEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBewertung?: Maybe<BewertungEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateBlogKategorie?: Maybe<BlogKategorieEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFormular?: Maybe<FormularEntityResponse>;
  updateIndustrie?: Maybe<IndustrieEntityResponse>;
  updateJob?: Maybe<JobEntityResponse>;
  updateNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  updateNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  updateNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  updateNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  updateProdukt?: Maybe<ProduktEntityResponse>;
  updateSeite?: Maybe<SeiteEntityResponse>;
  updateSeitenEinstellung?: Maybe<SeitenEinstellungEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateBewertungArgs = {
  data: BewertungInput;
};


export type MutationCreateBlogArgs = {
  data: BlogInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBlogKategorieArgs = {
  data: BlogKategorieInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBlogKategorieLocalizationArgs = {
  data?: InputMaybe<BlogKategorieInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBlogLocalizationArgs = {
  data?: InputMaybe<BlogInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFormularArgs = {
  data: FormularInput;
};


export type MutationCreateIndustrieArgs = {
  data: IndustrieInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateIndustrieLocalizationArgs = {
  data?: InputMaybe<IndustrieInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateJobArgs = {
  data: JobInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateJobLocalizationArgs = {
  data?: InputMaybe<JobInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateNavigationAudienceArgs = {
  data: NavigationAudienceInput;
};


export type MutationCreateNavigationNavigationArgs = {
  data: NavigationNavigationInput;
};


export type MutationCreateNavigationNavigationItemArgs = {
  data: NavigationNavigationItemInput;
};


export type MutationCreateNavigationNavigationsItemsRelatedArgs = {
  data: NavigationNavigationsItemsRelatedInput;
};


export type MutationCreateProduktArgs = {
  data: ProduktInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProduktLocalizationArgs = {
  data?: InputMaybe<ProduktInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSeiteArgs = {
  data: SeiteInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSeiteLocalizationArgs = {
  data?: InputMaybe<SeiteInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBewertungArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBlogArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBlogKategorieArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFormularArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteIndustrieArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteJobArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteNavigationAudienceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationsItemsRelatedArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProduktArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSeiteArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBewertungArgs = {
  data: BewertungInput;
  id: Scalars['ID'];
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBlogKategorieArgs = {
  data: BlogKategorieInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFormularArgs = {
  data: FormularInput;
  id: Scalars['ID'];
};


export type MutationUpdateIndustrieArgs = {
  data: IndustrieInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateJobArgs = {
  data: JobInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateNavigationAudienceArgs = {
  data: NavigationAudienceInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationArgs = {
  data: NavigationNavigationInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationItemArgs = {
  data: NavigationNavigationItemInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationsItemsRelatedArgs = {
  data: NavigationNavigationsItemsRelatedInput;
  id: Scalars['ID'];
};


export type MutationUpdateProduktArgs = {
  data: ProduktInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSeiteArgs = {
  data: SeiteInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSeitenEinstellungArgs = {
  data: SeitenEinstellungInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavigationAudience = {
  __typename?: 'NavigationAudience';
  createdAt?: Maybe<Scalars['DateTime']>;
  key?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationAudienceEntity = {
  __typename?: 'NavigationAudienceEntity';
  attributes?: Maybe<NavigationAudience>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationAudienceEntityResponse = {
  __typename?: 'NavigationAudienceEntityResponse';
  data?: Maybe<NavigationAudienceEntity>;
};

export type NavigationAudienceEntityResponseCollection = {
  __typename?: 'NavigationAudienceEntityResponseCollection';
  data: Array<NavigationAudienceEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationAudienceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationAudienceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationAudienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationAudienceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationAudienceInput = {
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NavigationAudienceRelationResponseCollection = {
  __typename?: 'NavigationAudienceRelationResponseCollection';
  data: Array<NavigationAudienceEntity>;
};

export type NavigationNavigation = {
  __typename?: 'NavigationNavigation';
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<NavigationNavigationItemRelationResponseCollection>;
  localeCode?: Maybe<Scalars['String']>;
  localizations?: Maybe<NavigationNavigationRelationResponseCollection>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  visible?: Maybe<Scalars['Boolean']>;
};


export type NavigationNavigationItemsArgs = {
  filters?: InputMaybe<NavigationNavigationItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NavigationNavigationLocalizationsArgs = {
  filters?: InputMaybe<NavigationNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationNavigationEntity = {
  __typename?: 'NavigationNavigationEntity';
  attributes?: Maybe<NavigationNavigation>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationEntityResponse = {
  __typename?: 'NavigationNavigationEntityResponse';
  data?: Maybe<NavigationNavigationEntity>;
};

export type NavigationNavigationEntityResponseCollection = {
  __typename?: 'NavigationNavigationEntityResponseCollection';
  data: Array<NavigationNavigationEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<NavigationNavigationItemFiltersInput>;
  localeCode?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NavigationNavigationFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationNavigationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  visible?: InputMaybe<BooleanFilterInput>;
};

export type NavigationNavigationInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  localeCode?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationNavigationItem = {
  __typename?: 'NavigationNavigationItem';
  additionalFields?: Maybe<Scalars['JSON']>;
  audience?: Maybe<NavigationAudienceRelationResponseCollection>;
  collapsed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  externalPath?: Maybe<Scalars['String']>;
  master?: Maybe<NavigationNavigationEntityResponse>;
  menuAttached?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<NavigationNavigationItemEntityResponse>;
  path?: Maybe<Scalars['String']>;
  related?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  title: Scalars['String'];
  type?: Maybe<Enum_Navigationnavigationitem_Type>;
  uiRouterKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavigationNavigationItemAudienceArgs = {
  filters?: InputMaybe<NavigationAudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationNavigationItemEntity = {
  __typename?: 'NavigationNavigationItemEntity';
  attributes?: Maybe<NavigationNavigationItem>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationItemEntityResponse = {
  __typename?: 'NavigationNavigationItemEntityResponse';
  data?: Maybe<NavigationNavigationItemEntity>;
};

export type NavigationNavigationItemEntityResponseCollection = {
  __typename?: 'NavigationNavigationItemEntityResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationItemFiltersInput = {
  additionalFields?: InputMaybe<JsonFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationItemFiltersInput>>>;
  audience?: InputMaybe<NavigationAudienceFiltersInput>;
  collapsed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  externalPath?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  master?: InputMaybe<NavigationNavigationFiltersInput>;
  menuAttached?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<NavigationNavigationItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<NavigationNavigationItemFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  related?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  uiRouterKey?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationNavigationItemInput = {
  additionalFields?: InputMaybe<Scalars['JSON']>;
  audience?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  collapsed?: InputMaybe<Scalars['Boolean']>;
  externalPath?: InputMaybe<Scalars['String']>;
  master?: InputMaybe<Scalars['ID']>;
  menuAttached?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  related?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Navigationnavigationitem_Type>;
  uiRouterKey?: InputMaybe<Scalars['String']>;
};

export type NavigationNavigationItemRelationResponseCollection = {
  __typename?: 'NavigationNavigationItemRelationResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
};

export type NavigationNavigationRelationResponseCollection = {
  __typename?: 'NavigationNavigationRelationResponseCollection';
  data: Array<NavigationNavigationEntity>;
};

export type NavigationNavigationsItemsRelated = {
  __typename?: 'NavigationNavigationsItemsRelated';
  createdAt?: Maybe<Scalars['DateTime']>;
  field: Scalars['String'];
  master: Scalars['String'];
  order: Scalars['Int'];
  related_id: Scalars['String'];
  related_type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationNavigationsItemsRelatedEntity = {
  __typename?: 'NavigationNavigationsItemsRelatedEntity';
  attributes?: Maybe<NavigationNavigationsItemsRelated>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationsItemsRelatedEntityResponse = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponse';
  data?: Maybe<NavigationNavigationsItemsRelatedEntity>;
};

export type NavigationNavigationsItemsRelatedEntityResponseCollection = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponseCollection';
  data: Array<NavigationNavigationsItemsRelatedEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationsItemsRelatedFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  field?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  master?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  related_id?: InputMaybe<StringFilterInput>;
  related_type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationNavigationsItemsRelatedInput = {
  field?: InputMaybe<Scalars['String']>;
  master?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  related_id?: InputMaybe<Scalars['String']>;
  related_type?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Produkt = {
  __typename?: 'Produkt';
  beschreibung?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  industrien?: Maybe<IndustrieRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ProduktRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<Array<Maybe<ComponentSharedSeo>>>;
  slug?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vorschau?: Maybe<UploadFileEntityResponse>;
};


export type ProduktIndustrienArgs = {
  filters?: InputMaybe<IndustrieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProduktLocalizationsArgs = {
  filters?: InputMaybe<ProduktFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProduktSeoArgs = {
  filters?: InputMaybe<ComponentSharedSeoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProduktEntity = {
  __typename?: 'ProduktEntity';
  attributes?: Maybe<Produkt>;
  id?: Maybe<Scalars['ID']>;
};

export type ProduktEntityResponse = {
  __typename?: 'ProduktEntityResponse';
  data?: Maybe<ProduktEntity>;
};

export type ProduktEntityResponseCollection = {
  __typename?: 'ProduktEntityResponseCollection';
  data: Array<ProduktEntity>;
  meta: ResponseCollectionMeta;
};

export type ProduktFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProduktFiltersInput>>>;
  beschreibung?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  industrien?: InputMaybe<IndustrieFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProduktFiltersInput>;
  not?: InputMaybe<ProduktFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProduktFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  titel?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProduktInput = {
  beschreibung?: InputMaybe<Scalars['String']>;
  industrien?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Array<InputMaybe<ComponentSharedSeoInput>>>;
  slug?: InputMaybe<Scalars['String']>;
  titel?: InputMaybe<Scalars['String']>;
  vorschau?: InputMaybe<Scalars['ID']>;
};

export type ProduktRelationResponseCollection = {
  __typename?: 'ProduktRelationResponseCollection';
  data: Array<ProduktEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  bewertung?: Maybe<BewertungEntityResponse>;
  bewertungen?: Maybe<BewertungEntityResponseCollection>;
  blog?: Maybe<BlogEntityResponse>;
  blogKategorie?: Maybe<BlogKategorieEntityResponse>;
  blogKategories?: Maybe<BlogKategorieEntityResponseCollection>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  formular?: Maybe<FormularEntityResponse>;
  formulare?: Maybe<FormularEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  industrie?: Maybe<IndustrieEntityResponse>;
  industrien?: Maybe<IndustrieEntityResponseCollection>;
  job?: Maybe<JobEntityResponse>;
  jobs?: Maybe<JobEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  navigationAudiences?: Maybe<NavigationAudienceEntityResponseCollection>;
  navigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  navigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  navigationNavigationItems?: Maybe<NavigationNavigationItemEntityResponseCollection>;
  navigationNavigations?: Maybe<NavigationNavigationEntityResponseCollection>;
  navigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  navigationNavigationsItemsRelateds?: Maybe<NavigationNavigationsItemsRelatedEntityResponseCollection>;
  produkt?: Maybe<ProduktEntityResponse>;
  produkte?: Maybe<ProduktEntityResponseCollection>;
  seite?: Maybe<SeiteEntityResponse>;
  seiten?: Maybe<SeiteEntityResponseCollection>;
  seitenEinstellung?: Maybe<SeitenEinstellungEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBewertungArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBewertungenArgs = {
  filters?: InputMaybe<BewertungFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBlogKategorieArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBlogKategoriesArgs = {
  filters?: InputMaybe<BlogKategorieFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFormularArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFormulareArgs = {
  filters?: InputMaybe<FormularFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIndustrieArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryIndustrienArgs = {
  filters?: InputMaybe<IndustrieFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryJobArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationAudienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationAudiencesArgs = {
  filters?: InputMaybe<NavigationAudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationItemsArgs = {
  filters?: InputMaybe<NavigationNavigationItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationsArgs = {
  filters?: InputMaybe<NavigationNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationsItemsRelatedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationsItemsRelatedsArgs = {
  filters?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProduktArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryProdukteArgs = {
  filters?: InputMaybe<ProduktFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeiteArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QuerySeitenArgs = {
  filters?: InputMaybe<SeiteFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Seite = {
  __typename?: 'Seite';
  createdAt?: Maybe<Scalars['DateTime']>;
  inhalte?: Maybe<Array<Maybe<SeiteInhalteDynamicZone>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<SeiteRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']>;
  titel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SeiteLocalizationsArgs = {
  filters?: InputMaybe<SeiteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeiteEntity = {
  __typename?: 'SeiteEntity';
  attributes?: Maybe<Seite>;
  id?: Maybe<Scalars['ID']>;
};

export type SeiteEntityResponse = {
  __typename?: 'SeiteEntityResponse';
  data?: Maybe<SeiteEntity>;
};

export type SeiteEntityResponseCollection = {
  __typename?: 'SeiteEntityResponseCollection';
  data: Array<SeiteEntity>;
  meta: ResponseCollectionMeta;
};

export type SeiteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SeiteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SeiteFiltersInput>;
  not?: InputMaybe<SeiteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SeiteFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  titel?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SeiteInhalteDynamicZone = ComponentHeadingsHeadingMinimalistisch | ComponentHeadingsHeadingMitVideo | ComponentHerosHero1 | ComponentIntegrationenBewertungen | ComponentIntegrationenFormular | ComponentIntegrationenJobs | ComponentListenGridListe | ComponentListenIndustrieListe | ComponentListenTimelineListe | ComponentSektionenInhaltMitMedia | ComponentSliderHorizontalerSlider | ComponentSliderHorizontalerSliderFokus | ComponentUtilsText | Error;

export type SeiteInput = {
  inhalte?: InputMaybe<Array<Scalars['SeiteInhalteDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  titel?: InputMaybe<Scalars['String']>;
};

export type SeiteRelationResponseCollection = {
  __typename?: 'SeiteRelationResponseCollection';
  data: Array<SeiteEntity>;
};

export type SeitenEinstellung = {
  __typename?: 'SeitenEinstellung';
  createdAt?: Maybe<Scalars['DateTime']>;
  footer_text?: Maybe<Scalars['String']>;
  karriere?: Maybe<ComponentUtilsJobsEinstellungen>;
  kontakt?: Maybe<Array<Maybe<ComponentUtilsKontakt>>>;
  logo?: Maybe<ComponentUtilsLogo>;
  name_des_unternehmens: Scalars['String'];
  social_media?: Maybe<Array<Maybe<ComponentUtilsSocialMedia>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SeitenEinstellungKontaktArgs = {
  filters?: InputMaybe<ComponentUtilsKontaktFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SeitenEinstellungSocial_MediaArgs = {
  filters?: InputMaybe<ComponentUtilsSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeitenEinstellungEntity = {
  __typename?: 'SeitenEinstellungEntity';
  attributes?: Maybe<SeitenEinstellung>;
  id?: Maybe<Scalars['ID']>;
};

export type SeitenEinstellungEntityResponse = {
  __typename?: 'SeitenEinstellungEntityResponse';
  data?: Maybe<SeitenEinstellungEntity>;
};

export type SeitenEinstellungInput = {
  footer_text?: InputMaybe<Scalars['String']>;
  karriere?: InputMaybe<ComponentUtilsJobsEinstellungenInput>;
  kontakt?: InputMaybe<Array<InputMaybe<ComponentUtilsKontaktInput>>>;
  logo?: InputMaybe<ComponentUtilsLogoInput>;
  name_des_unternehmens?: InputMaybe<Scalars['String']>;
  social_media?: InputMaybe<Array<InputMaybe<ComponentUtilsSocialMediaInput>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  folder?: Maybe<UploadFolderEntityResponse>;
  folderPath: Scalars['String'];
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetIndustryQueryVariables = Exact<{
  filters?: InputMaybe<IndustrieFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetIndustryQuery = { __typename?: 'Query', industrien?: { __typename?: 'IndustrieEntityResponseCollection', data: Array<{ __typename?: 'IndustrieEntity', attributes?: { __typename?: 'Industrie', beschreibung?: string | null, locale?: string | null, slug?: string | null, titel?: string | null, alle_anzeigen?: boolean | null, vorschau?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, produkte?: { __typename?: 'ProduktRelationResponseCollection', data: Array<{ __typename?: 'ProduktEntity', attributes?: { __typename?: 'Produkt', beschreibung?: string | null, slug?: string | null, titel?: string | null, vorschau?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null }> } | null };

export type GetIndustrySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetIndustrySlugQuery = { __typename?: 'Query', industrien?: { __typename?: 'IndustrieEntityResponseCollection', data: Array<{ __typename?: 'IndustrieEntity', attributes?: { __typename?: 'Industrie', slug?: string | null, locale?: string | null, localizations?: { __typename?: 'IndustrieRelationResponseCollection', data: Array<{ __typename?: 'IndustrieEntity', attributes?: { __typename?: 'Industrie', slug?: string | null, locale?: string | null } | null }> } | null } | null }> } | null };

export type GetJobQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  filters?: InputMaybe<JobFiltersInput>;
}>;


export type GetJobQuery = { __typename?: 'Query', jobs?: { __typename?: 'JobEntityResponseCollection', data: Array<{ __typename?: 'JobEntity', attributes?: { __typename?: 'Job', locale?: string | null, slug: string, titel: string, art: Enum_Job_Art, auszug?: string | null, beschreibung?: string | null, publishedAt?: any | null, badges?: Array<{ __typename?: 'ComponentUtilsBadge', text: string, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null } | null> | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetJobSlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetJobSlugQuery = { __typename?: 'Query', jobs?: { __typename?: 'JobEntityResponseCollection', data: Array<{ __typename?: 'JobEntity', attributes?: { __typename?: 'Job', slug: string, locale?: string | null, localizations?: { __typename?: 'JobRelationResponseCollection', data: Array<{ __typename?: 'JobEntity', attributes?: { __typename?: 'Job', slug: string, locale?: string | null } | null }> } | null } | null }> } | null };

export type GetLocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocalesQuery = { __typename?: 'Query', i18NLocales?: { __typename?: 'I18NLocaleEntityResponseCollection', data: Array<{ __typename?: 'I18NLocaleEntity', id?: string | null, attributes?: { __typename?: 'I18NLocale', code?: string | null } | null }> } | null };

export type GetPageQueryVariables = Exact<{
  filters?: InputMaybe<SeiteFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetPageQuery = { __typename?: 'Query', seiten?: { __typename?: 'SeiteEntityResponseCollection', data: Array<{ __typename?: 'SeiteEntity', attributes?: { __typename?: 'Seite', slug?: string | null, seo?: { __typename?: 'ComponentSharedSeo', meta_description: string, meta_title: string, canonical_URL?: string | null, meta_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, inhalte?: Array<{ __typename?: 'ComponentHeadingsHeadingMinimalistisch', ausrichtung?: Enum_Componentheadingsheadingminimalistisch_Ausrichtung | null, beschreibung?: string | null, dekoration_anzeigen?: boolean | null, titel: string, bild?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null } | { __typename?: 'ComponentHeadingsHeadingMitVideo', ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null, heading_media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', ext?: string | null, height?: number | null, url: string, width?: number | null } | null } | null } | null } | { __typename?: 'ComponentHerosHero1', sichtbar: boolean, hero_btn?: Array<{ __typename?: 'ComponentUtilsButton', text: string, url: string, variante: Enum_Componentutilsbutton_Variante } | null> | null, hintergrund?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', ext?: string | null, url: string } | null } | null } | null, ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null } | { __typename?: 'ComponentIntegrationenBewertungen', alle_anzeigen?: boolean | null, ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null, bewertungen?: { __typename?: 'BewertungRelationResponseCollection', data: Array<{ __typename?: 'BewertungEntity', attributes?: { __typename?: 'Bewertung', kommentar?: string | null, person?: Array<{ __typename?: 'ComponentUtilsGoogleReviewer', ist_anonym?: boolean | null, name?: string | null, photo_url?: string | null } | null> | null } | null }> } | null } | { __typename?: 'ComponentIntegrationenFormular', sichtbar: boolean, formular?: { __typename?: 'FormularEntityResponse', data?: { __typename?: 'FormularEntity', attributes?: { __typename?: 'Formular', titel?: string | null, email_empfaenger?: string | null, ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null, Fragen: Array<{ __typename?: 'ComponentFormDatum', frage: string, notwendig?: boolean | null } | { __typename?: 'ComponentFormDatumUhrzeit', frage: string, notwendig?: boolean | null } | { __typename?: 'ComponentFormLongText', frage: string, notwendig?: boolean | null } | { __typename?: 'ComponentFormMultipleChoice', frage: string, notwendig?: boolean | null, moeglichkeit?: Array<{ __typename?: 'ComponentFormAntwortmoeglichkeit', antwort?: string | null, id: string, overwrite_email?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, url: string } | null } | null } | null } | null> | null } | { __typename?: 'ComponentFormTextForm', frage: string, notwendig?: boolean | null } | { __typename?: 'ComponentFormUhrzeit', frage: string, notwendig?: boolean | null } | { __typename?: 'Error', code: string, message?: string | null } | null> } | null } | null } | null } | { __typename?: 'ComponentIntegrationenJobs', STYLE: Enum_Componentintegrationenjobs_Style, alle_anzeigen?: boolean | null, jobs?: { __typename?: 'JobRelationResponseCollection', data: Array<{ __typename?: 'JobEntity', attributes?: { __typename?: 'Job', art: Enum_Job_Art, auszug?: string | null, beschreibung?: string | null, publishedAt?: any | null, slug: string, titel: string, badges?: Array<{ __typename?: 'ComponentUtilsBadge', text: string, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null } | null> | null } | null }> } | null } | { __typename?: 'ComponentListenGridListe', ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null, inhalt?: Array<{ __typename?: 'ComponentUtilsGridElement', text?: string | null, titel?: string | null, bild?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentListenIndustrieListe', industrien?: { __typename?: 'IndustrieRelationResponseCollection', data: Array<{ __typename?: 'IndustrieEntity', attributes?: { __typename?: 'Industrie', beschreibung?: string | null, slug?: string | null, titel?: string | null, alle_anzeigen?: boolean | null, vorschau?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null } | null }> } | null } | { __typename?: 'ComponentListenTimelineListe', ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null, timeline_karten?: Array<{ __typename?: 'ComponentUtilsTimelineKarte', beschreibung?: string | null, titel: string, zeitpunkt: any, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentSektionenInhaltMitMedia', MEDIA_POSITION: Enum_Componentsektioneninhaltmitmedia_Media_Position, ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null, media: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } } | { __typename?: 'ComponentSliderHorizontalerSlider', sichtbar: boolean, cards?: Array<{ __typename?: 'ComponentSliderSliderCard', icon_text?: string | null, text?: string | null, ueberschrift?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null } | null> | null, uberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null } | { __typename?: 'ComponentSliderHorizontalerSliderFokus', background_anzeigen?: boolean | null, karten_ausserhalb_anzeigen?: boolean | null, sichtbar: boolean, button?: { __typename?: 'ComponentUtilsButton', id: string, text: string, url: string, variante: Enum_Componentutilsbutton_Variante } | null, cards?: Array<{ __typename?: 'ComponentSliderSliderCard2', text?: string | null, ueberschrift?: string | null, vorteile?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', height?: number | null, url: string, width?: number | null } | null } | null } | null, medien?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, caption?: string | null, url: string, name: string } | null }> } | null } | null> | null, ueberschrift?: { __typename?: 'ComponentUtilsHeading', heading?: string | null, text?: string | null, topline?: string | null, typ: Enum_Componentutilsheading_Typ } | null, autoplay?: { __typename?: 'ComponentUtilsAutoplayEinstellungen', ist_aktiv?: boolean | null, dauer?: number | null } | null } | { __typename?: 'ComponentUtilsText', text_content?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null } | null }> } | null };

export type GetPageHandleQueryVariables = Exact<{
  filters?: InputMaybe<SeiteFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type GetPageHandleQuery = { __typename?: 'Query', seiten?: { __typename?: 'SeiteEntityResponseCollection', data: Array<{ __typename?: 'SeiteEntity', attributes?: { __typename?: 'Seite', locale?: string | null, slug?: string | null, titel?: string | null, localizations?: { __typename?: 'SeiteRelationResponseCollection', data: Array<{ __typename?: 'SeiteEntity', attributes?: { __typename?: 'Seite', locale?: string | null, slug?: string | null, titel?: string | null } | null }> } | null, inhalte?: Array<{ __typename?: 'ComponentHeadingsHeadingMinimalistisch' } | { __typename?: 'ComponentHeadingsHeadingMitVideo' } | { __typename?: 'ComponentHerosHero1' } | { __typename?: 'ComponentIntegrationenBewertungen' } | { __typename?: 'ComponentIntegrationenFormular' } | { __typename?: 'ComponentIntegrationenJobs', jobs?: { __typename?: 'JobRelationResponseCollection', data: Array<{ __typename?: 'JobEntity', attributes?: { __typename?: 'Job', locale?: string | null, slug: string, localizations?: { __typename?: 'JobRelationResponseCollection', data: Array<{ __typename?: 'JobEntity', attributes?: { __typename?: 'Job', slug: string, locale?: string | null } | null }> } | null } | null }> } | null } | { __typename?: 'ComponentListenGridListe' } | { __typename?: 'ComponentListenIndustrieListe', industrien?: { __typename?: 'IndustrieRelationResponseCollection', data: Array<{ __typename?: 'IndustrieEntity', attributes?: { __typename?: 'Industrie', locale?: string | null, slug?: string | null, localizations?: { __typename?: 'IndustrieRelationResponseCollection', data: Array<{ __typename?: 'IndustrieEntity', attributes?: { __typename?: 'Industrie', slug?: string | null, locale?: string | null } | null }> } | null } | null }> } | null } | { __typename?: 'ComponentListenTimelineListe' } | { __typename?: 'ComponentSektionenInhaltMitMedia' } | { __typename?: 'ComponentSliderHorizontalerSlider' } | { __typename?: 'ComponentSliderHorizontalerSliderFokus' } | { __typename?: 'ComponentUtilsText' } | { __typename?: 'Error' } | null> | null } | null }> } | null };

export type GetProductsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetProductsQuery = { __typename?: 'Query', produkte?: { __typename?: 'ProduktEntityResponseCollection', data: Array<{ __typename?: 'ProduktEntity', attributes?: { __typename?: 'Produkt', beschreibung?: string | null, slug?: string | null, titel?: string | null, vorschau?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type GetReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReviewsQuery = { __typename?: 'Query', bewertungen?: { __typename?: 'BewertungEntityResponseCollection', data: Array<{ __typename?: 'BewertungEntity', attributes?: { __typename?: 'Bewertung', kommentar?: string | null, person?: Array<{ __typename?: 'ComponentUtilsGoogleReviewer', ist_anonym?: boolean | null, name?: string | null, photo_url?: string | null } | null> | null } | null }> } | null };

export type GetSingleTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSingleTypesQuery = { __typename?: 'Query', seitenEinstellung?: { __typename?: 'SeitenEinstellungEntityResponse', data?: { __typename?: 'SeitenEinstellungEntity', attributes?: { __typename?: 'SeitenEinstellung', createdAt?: any | null, footer_text?: string | null, name_des_unternehmens: string, updatedAt?: any | null, karriere?: { __typename?: 'ComponentUtilsJobsEinstellungen', button_inhalt?: string | null, button_url?: string | null, text?: string | null } | null, kontakt?: Array<{ __typename?: 'ComponentUtilsKontakt', inhalt?: string | null, type?: Enum_Componentutilskontakt_Type | null } | null> | null, logo?: { __typename?: 'ComponentUtilsLogo', logo_dunkel?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null, logo_hell?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, logo_standard: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null, social_media?: Array<{ __typename?: 'ComponentUtilsSocialMedia', typ?: Enum_Componentutilssocialmedia_Typ | null, url?: string | null } | null> | null } | null } | null } | null };


export const GetIndustryDocument = gql`
    query getIndustry($filters: IndustrieFiltersInput, $locale: I18NLocaleCode) {
  industrien(filters: $filters, locale: $locale) {
    data {
      attributes {
        beschreibung
        locale
        slug
        titel
        alle_anzeigen
        vorschau {
          data {
            attributes {
              url
            }
          }
        }
        produkte {
          data {
            attributes {
              beschreibung
              slug
              titel
              vorschau {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetIndustryQuery__
 *
 * To run a query within a React component, call `useGetIndustryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndustryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndustryQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetIndustryQuery(baseOptions?: Apollo.QueryHookOptions<GetIndustryQuery, GetIndustryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndustryQuery, GetIndustryQueryVariables>(GetIndustryDocument, options);
      }
export function useGetIndustryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndustryQuery, GetIndustryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndustryQuery, GetIndustryQueryVariables>(GetIndustryDocument, options);
        }
export type GetIndustryQueryHookResult = ReturnType<typeof useGetIndustryQuery>;
export type GetIndustryLazyQueryHookResult = ReturnType<typeof useGetIndustryLazyQuery>;
export type GetIndustryQueryResult = Apollo.QueryResult<GetIndustryQuery, GetIndustryQueryVariables>;
export const GetIndustrySlugDocument = gql`
    query getIndustrySlug($locale: I18NLocaleCode, $pagination: PaginationArg) {
  industrien(locale: $locale, pagination: $pagination) {
    data {
      attributes {
        slug
        locale
        localizations {
          data {
            attributes {
              slug
              locale
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetIndustrySlugQuery__
 *
 * To run a query within a React component, call `useGetIndustrySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndustrySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndustrySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetIndustrySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetIndustrySlugQuery, GetIndustrySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndustrySlugQuery, GetIndustrySlugQueryVariables>(GetIndustrySlugDocument, options);
      }
export function useGetIndustrySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndustrySlugQuery, GetIndustrySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndustrySlugQuery, GetIndustrySlugQueryVariables>(GetIndustrySlugDocument, options);
        }
export type GetIndustrySlugQueryHookResult = ReturnType<typeof useGetIndustrySlugQuery>;
export type GetIndustrySlugLazyQueryHookResult = ReturnType<typeof useGetIndustrySlugLazyQuery>;
export type GetIndustrySlugQueryResult = Apollo.QueryResult<GetIndustrySlugQuery, GetIndustrySlugQueryVariables>;
export const GetJobDocument = gql`
    query getJob($locale: I18NLocaleCode, $pagination: PaginationArg, $filters: JobFiltersInput) {
  jobs(locale: $locale, pagination: $pagination, filters: $filters) {
    data {
      attributes {
        locale
        slug
        titel
        art
        auszug
        beschreibung
        publishedAt
        badges {
          icon {
            data {
              attributes {
                height
                url
                width
              }
            }
          }
          text
        }
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;

/**
 * __useGetJobQuery__
 *
 * To run a query within a React component, call `useGetJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetJobQuery(baseOptions?: Apollo.QueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
      }
export function useGetJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
        }
export type GetJobQueryHookResult = ReturnType<typeof useGetJobQuery>;
export type GetJobLazyQueryHookResult = ReturnType<typeof useGetJobLazyQuery>;
export type GetJobQueryResult = Apollo.QueryResult<GetJobQuery, GetJobQueryVariables>;
export const GetJobSlugDocument = gql`
    query getJobSlug($locale: I18NLocaleCode, $pagination: PaginationArg) {
  jobs(locale: $locale, pagination: $pagination) {
    data {
      attributes {
        slug
        locale
        localizations {
          data {
            attributes {
              slug
              locale
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetJobSlugQuery__
 *
 * To run a query within a React component, call `useGetJobSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobSlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetJobSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetJobSlugQuery, GetJobSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobSlugQuery, GetJobSlugQueryVariables>(GetJobSlugDocument, options);
      }
export function useGetJobSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobSlugQuery, GetJobSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobSlugQuery, GetJobSlugQueryVariables>(GetJobSlugDocument, options);
        }
export type GetJobSlugQueryHookResult = ReturnType<typeof useGetJobSlugQuery>;
export type GetJobSlugLazyQueryHookResult = ReturnType<typeof useGetJobSlugLazyQuery>;
export type GetJobSlugQueryResult = Apollo.QueryResult<GetJobSlugQuery, GetJobSlugQueryVariables>;
export const GetLocalesDocument = gql`
    query getLocales {
  i18NLocales {
    data {
      id
      attributes {
        code
      }
    }
  }
}
    `;

/**
 * __useGetLocalesQuery__
 *
 * To run a query within a React component, call `useGetLocalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocalesQuery(baseOptions?: Apollo.QueryHookOptions<GetLocalesQuery, GetLocalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocalesQuery, GetLocalesQueryVariables>(GetLocalesDocument, options);
      }
export function useGetLocalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocalesQuery, GetLocalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocalesQuery, GetLocalesQueryVariables>(GetLocalesDocument, options);
        }
export type GetLocalesQueryHookResult = ReturnType<typeof useGetLocalesQuery>;
export type GetLocalesLazyQueryHookResult = ReturnType<typeof useGetLocalesLazyQuery>;
export type GetLocalesQueryResult = Apollo.QueryResult<GetLocalesQuery, GetLocalesQueryVariables>;
export const GetPageDocument = gql`
    query getPage($filters: SeiteFiltersInput, $locale: I18NLocaleCode, $pagination: PaginationArg) {
  seiten(filters: $filters, locale: $locale) {
    data {
      attributes {
        seo {
          meta_description
          meta_title
          meta_image {
            data {
              attributes {
                url
              }
            }
          }
          canonical_URL
        }
        slug
        inhalte {
          ... on ComponentHerosHero1 {
            hero_btn: button {
              text
              url
              variante
            }
            hintergrund {
              data {
                attributes {
                  ext
                  url
                }
              }
            }
            sichtbar
            ueberschrift {
              heading
              text
              topline
              typ
            }
          }
          ... on ComponentSliderHorizontalerSlider {
            cards {
              icon {
                data {
                  attributes {
                    height
                    url
                    width
                  }
                }
              }
              icon_text
              text
              ueberschrift
            }
            sichtbar
            uberschrift {
              heading
              text
              topline
              typ
            }
          }
          ... on ComponentSliderHorizontalerSliderFokus {
            background_anzeigen
            button {
              id
              text
              url
              variante
            }
            cards {
              image {
                data {
                  attributes {
                    height
                    url
                    width
                  }
                }
              }
              text
              ueberschrift
              vorteile
              medien {
                data {
                  attributes {
                    alternativeText
                    caption
                    url
                    name
                  }
                }
              }
            }
            karten_ausserhalb_anzeigen
            sichtbar
            ueberschrift {
              heading
              text
              topline
              typ
            }
            autoplay {
              ist_aktiv
              dauer
            }
          }
          ... on ComponentIntegrationenFormular {
            formular {
              data {
                attributes {
                  ueberschrift {
                    heading
                    text
                    topline
                    typ
                  }
                  titel
                  Fragen {
                    ... on ComponentFormTextForm {
                      frage
                      notwendig
                    }
                    ... on ComponentFormLongText {
                      frage
                      notwendig
                    }
                    ... on ComponentFormDatumUhrzeit {
                      frage
                      notwendig
                    }
                    ... on ComponentFormDatum {
                      frage
                      notwendig
                    }
                    ... on ComponentFormMultipleChoice {
                      frage
                      moeglichkeit {
                        antwort
                        id
                        overwrite_email
                        icon {
                          data {
                            attributes {
                              alternativeText
                              caption
                              url
                            }
                          }
                        }
                      }
                      notwendig
                    }
                    ... on ComponentFormUhrzeit {
                      frage
                      notwendig
                    }
                    ... on Error {
                      code
                      message
                    }
                  }
                  email_empfaenger
                }
              }
            }
            sichtbar
          }
          ... on ComponentListenGridListe {
            ueberschrift {
              heading
              text
              topline
              typ
            }
            inhalt {
              bild {
                data {
                  attributes {
                    height
                    url
                    width
                  }
                }
              }
              text
              titel
            }
          }
          ... on ComponentHeadingsHeadingMinimalistisch {
            ausrichtung
            beschreibung
            dekoration_anzeigen
            titel
            bild {
              data {
                attributes {
                  height
                  url
                  width
                }
              }
            }
          }
          ... on ComponentHeadingsHeadingMitVideo {
            ueberschrift {
              heading
              text
              topline
              typ
            }
            heading_media: media {
              data {
                attributes {
                  ext
                  height
                  url
                  width
                }
              }
            }
          }
          ... on ComponentListenTimelineListe {
            ueberschrift {
              heading
              text
              topline
              typ
            }
            timeline_karten {
              beschreibung
              media {
                data {
                  attributes {
                    height
                    url
                    width
                  }
                }
              }
              titel
              zeitpunkt
            }
          }
          ... on ComponentSektionenInhaltMitMedia {
            ueberschrift {
              heading
              text
              topline
              typ
            }
            MEDIA_POSITION
            media {
              data {
                attributes {
                  height
                  url
                  width
                }
              }
            }
          }
          ... on ComponentIntegrationenJobs {
            STYLE
            alle_anzeigen
            jobs(pagination: $pagination) {
              data {
                attributes {
                  art
                  auszug
                  beschreibung
                  publishedAt
                  slug
                  titel
                  badges {
                    icon {
                      data {
                        attributes {
                          height
                          url
                          width
                        }
                      }
                    }
                    text
                  }
                }
              }
            }
          }
          ... on ComponentListenIndustrieListe {
            industrien {
              data {
                attributes {
                  beschreibung
                  slug
                  titel
                  alle_anzeigen
                  vorschau {
                    data {
                      attributes {
                        height
                        url
                        width
                      }
                    }
                  }
                }
              }
            }
          }
          ... on ComponentIntegrationenBewertungen {
            alle_anzeigen
            ueberschrift {
              heading
              text
              topline
              typ
            }
            bewertungen {
              data {
                attributes {
                  kommentar
                  person {
                    ist_anonym
                    name
                    photo_url
                  }
                }
              }
            }
          }
          ... on Error {
            code
            message
          }
          ... on ComponentUtilsText {
            text_content: inhalt
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions?: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<GetPageQuery, GetPageQueryVariables>;
export const GetPageHandleDocument = gql`
    query getPageHandle($filters: SeiteFiltersInput, $locale: I18NLocaleCode) {
  seiten(filters: $filters, locale: $locale) {
    data {
      attributes {
        locale
        slug
        titel
        localizations {
          data {
            attributes {
              locale
              slug
              titel
            }
          }
        }
        inhalte {
          ... on ComponentIntegrationenJobs {
            jobs {
              data {
                attributes {
                  locale
                  slug
                  localizations {
                    data {
                      attributes {
                        slug
                        locale
                      }
                    }
                  }
                }
              }
            }
          }
          ... on ComponentListenIndustrieListe {
            industrien {
              data {
                attributes {
                  locale
                  slug
                  localizations {
                    data {
                      attributes {
                        slug
                        locale
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPageHandleQuery__
 *
 * To run a query within a React component, call `useGetPageHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageHandleQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetPageHandleQuery(baseOptions?: Apollo.QueryHookOptions<GetPageHandleQuery, GetPageHandleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageHandleQuery, GetPageHandleQueryVariables>(GetPageHandleDocument, options);
      }
export function useGetPageHandleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageHandleQuery, GetPageHandleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageHandleQuery, GetPageHandleQueryVariables>(GetPageHandleDocument, options);
        }
export type GetPageHandleQueryHookResult = ReturnType<typeof useGetPageHandleQuery>;
export type GetPageHandleLazyQueryHookResult = ReturnType<typeof useGetPageHandleLazyQuery>;
export type GetPageHandleQueryResult = Apollo.QueryResult<GetPageHandleQuery, GetPageHandleQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts($locale: I18NLocaleCode, $pagination: PaginationArg) {
  produkte(locale: $locale, pagination: $pagination) {
    data {
      attributes {
        beschreibung
        slug
        titel
        vorschau {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetReviewsDocument = gql`
    query getReviews {
  bewertungen {
    data {
      attributes {
        kommentar
        person {
          ist_anonym
          name
          photo_url
        }
      }
    }
  }
}
    `;

/**
 * __useGetReviewsQuery__
 *
 * To run a query within a React component, call `useGetReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReviewsQuery(baseOptions?: Apollo.QueryHookOptions<GetReviewsQuery, GetReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReviewsQuery, GetReviewsQueryVariables>(GetReviewsDocument, options);
      }
export function useGetReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewsQuery, GetReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReviewsQuery, GetReviewsQueryVariables>(GetReviewsDocument, options);
        }
export type GetReviewsQueryHookResult = ReturnType<typeof useGetReviewsQuery>;
export type GetReviewsLazyQueryHookResult = ReturnType<typeof useGetReviewsLazyQuery>;
export type GetReviewsQueryResult = Apollo.QueryResult<GetReviewsQuery, GetReviewsQueryVariables>;
export const GetSingleTypesDocument = gql`
    query getSingleTypes {
  seitenEinstellung {
    data {
      attributes {
        createdAt
        footer_text
        karriere {
          button_inhalt
          button_url
          text
        }
        kontakt {
          inhalt
          type
        }
        logo {
          logo_dunkel {
            data {
              attributes {
                url
              }
            }
          }
          logo_hell {
            data {
              attributes {
                url
              }
            }
          }
          logo_standard {
            data {
              attributes {
                url
              }
            }
          }
        }
        name_des_unternehmens
        social_media {
          typ
          url
        }
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useGetSingleTypesQuery__
 *
 * To run a query within a React component, call `useGetSingleTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSingleTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetSingleTypesQuery, GetSingleTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleTypesQuery, GetSingleTypesQueryVariables>(GetSingleTypesDocument, options);
      }
export function useGetSingleTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleTypesQuery, GetSingleTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleTypesQuery, GetSingleTypesQueryVariables>(GetSingleTypesDocument, options);
        }
export type GetSingleTypesQueryHookResult = ReturnType<typeof useGetSingleTypesQuery>;
export type GetSingleTypesLazyQueryHookResult = ReturnType<typeof useGetSingleTypesLazyQuery>;
export type GetSingleTypesQueryResult = Apollo.QueryResult<GetSingleTypesQuery, GetSingleTypesQueryVariables>;