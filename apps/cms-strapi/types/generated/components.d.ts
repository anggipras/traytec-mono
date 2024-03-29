import type { Schema, Attribute } from '@strapi/strapi';

export interface FormAntwortmoeglichkeit extends Schema.Component {
  collectionName: 'components_form_antwortmoeglichkeits';
  info: {
    displayName: 'Antwortm\u00F6glichkeit';
    description: '';
  };
  attributes: {
    antwort: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    overwrite_email: Attribute.Email;
    icon: Attribute.Media;
  };
}

export interface FormDaten extends Schema.Component {
  collectionName: 'components_form_datens';
  info: {
    displayName: 'Daten';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    notwendig: Attribute.Boolean & Attribute.DefaultTo<false>;
    frage: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface FormDatumUhrzeit extends Schema.Component {
  collectionName: 'components_form_datum_uhrzeits';
  info: {
    displayName: 'Datum + Uhrzeit';
    description: '';
  };
  attributes: {
    frage: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    notwendig: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface FormDatum extends Schema.Component {
  collectionName: 'components_form_data';
  info: {
    displayName: 'Datum';
    description: '';
  };
  attributes: {
    frage: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    notwendig: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface FormLongText extends Schema.Component {
  collectionName: 'components_form_long_texts';
  info: {
    displayName: 'Text | Lang';
    description: '';
  };
  attributes: {
    frage: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    notwendig: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface FormMultipleChoice extends Schema.Component {
  collectionName: 'components_form_multiple_choices';
  info: {
    displayName: 'Multiple Choice';
    description: '';
  };
  attributes: {
    frage: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    notwendig: Attribute.Boolean & Attribute.DefaultTo<false>;
    moeglichkeit: Attribute.Component<'form.antwortmoeglichkeit', true>;
  };
}

export interface FormTextForm extends Schema.Component {
  collectionName: 'components_form_text_forms';
  info: {
    displayName: 'Text | Kurz';
    description: '';
  };
  attributes: {
    notwendig: Attribute.Boolean & Attribute.DefaultTo<false>;
    frage: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface FormUhrzeit extends Schema.Component {
  collectionName: 'components_form_uhrzeits';
  info: {
    displayName: 'Uhrzeit';
    description: '';
  };
  attributes: {
    frage: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    notwendig: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface HeadingsHeadingMinimalistisch extends Schema.Component {
  collectionName: 'components_headings_heading_minimalistisches';
  info: {
    displayName: 'Heading | Minimalistisch';
    description: '';
  };
  attributes: {
    titel: Attribute.String & Attribute.Required;
    ausrichtung: Attribute.Enumeration<['LINKS', 'ZENTRIERT']> &
      Attribute.DefaultTo<'LINKS'>;
    dekoration_anzeigen: Attribute.Boolean & Attribute.DefaultTo<true>;
    beschreibung: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    bild: Attribute.Media;
  };
}

export interface HeadingsHeadingMitVideo extends Schema.Component {
  collectionName: 'components_headings_heading_mit_videos';
  info: {
    displayName: 'Heading | Mit Video';
    description: '';
  };
  attributes: {
    ueberschrift: Attribute.Component<'utils.heading'>;
    media: Attribute.Media;
  };
}

export interface HerosHero1 extends Schema.Component {
  collectionName: 'components_heros_hero_1s';
  info: {
    displayName: 'Hero | Video BG';
    description: '';
  };
  attributes: {
    ueberschrift: Attribute.Component<'utils.heading'>;
    hintergrund: Attribute.Media;
    button: Attribute.Component<'utils.button', true>;
    sichtbar: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface IntegrationenBewertungen extends Schema.Component {
  collectionName: 'components_integrationen_bewertungens';
  info: {
    displayName: 'Bewertungen';
    description: '';
  };
  attributes: {
    alle_anzeigen: Attribute.Boolean & Attribute.DefaultTo<true>;
    bewertungen: Attribute.Relation<
      'integrationen.bewertungen',
      'oneToMany',
      'api::bewertung.bewertung'
    >;
    ueberschrift: Attribute.Component<'utils.heading'>;
    embla_optionen: Attribute.Component<'utils.embla-optionen'>;
  };
}

export interface IntegrationenFormular extends Schema.Component {
  collectionName: 'components_integrationen_formulars';
  info: {
    displayName: 'formular';
  };
  attributes: {
    formular: Attribute.Relation<
      'integrationen.formular',
      'oneToOne',
      'api::formular.formular'
    >;
    sichtbar: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface IntegrationenJobs extends Schema.Component {
  collectionName: 'components_integrationen_jobs';
  info: {
    displayName: 'Jobs';
    description: '';
  };
  attributes: {
    alle_anzeigen: Attribute.Boolean & Attribute.DefaultTo<true>;
    jobs: Attribute.Relation<'integrationen.jobs', 'oneToMany', 'api::job.job'>;
    STYLE: Attribute.Enumeration<['VOLLE_BREITE', 'GRID']> &
      Attribute.Required &
      Attribute.DefaultTo<'VOLLE_BREITE'>;
  };
}

export interface ListenGridListe extends Schema.Component {
  collectionName: 'components_listen_grid_listes';
  info: {
    displayName: 'Grid Liste';
  };
  attributes: {
    ueberschrift: Attribute.Component<'utils.heading'>;
    inhalt: Attribute.Component<'utils.grid-element', true>;
  };
}

export interface ListenIndustrieListe extends Schema.Component {
  collectionName: 'components_listen_industrie_listes';
  info: {
    displayName: 'Industrie Liste';
  };
  attributes: {
    industrien: Attribute.Relation<
      'listen.industrie-liste',
      'oneToMany',
      'api::industrie.industrie'
    >;
  };
}

export interface ListenTimelineListe extends Schema.Component {
  collectionName: 'components_listen_timeline_listes';
  info: {
    displayName: 'Timeline Liste';
  };
  attributes: {
    ueberschrift: Attribute.Component<'utils.heading'>;
    timeline_karten: Attribute.Component<'utils.timeline-karte', true>;
  };
}

export interface SektionenInhaltMitMedia extends Schema.Component {
  collectionName: 'components_sektionen_inhalt_mit_medias';
  info: {
    displayName: 'Inhalt mit Media';
  };
  attributes: {
    ueberschrift: Attribute.Component<'utils.heading'>;
    media: Attribute.Media & Attribute.Required;
    MEDIA_POSITION: Attribute.Enumeration<['LINKS', 'RECHTS']> &
      Attribute.Required &
      Attribute.DefaultTo<'RECHTS'>;
  };
}

export interface SharedCookieButton extends Schema.Component {
  collectionName: 'components_shared_cookie_buttons';
  info: {
    displayName: 'Cookie Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    buttonType: Attribute.Enumeration<['Primary', 'Secondary', 'Text']>;
    label: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    description: '';
  };
  attributes: {
    social_network: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    meta_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    meta_description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    meta_image: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    meta_robots: Attribute.String;
    structured_data: Attribute.JSON;
    meta_viewport: Attribute.String;
    canonical_URL: Attribute.String;
  };
}

export interface SliderHorizontalerSliderFokus extends Schema.Component {
  collectionName: 'components_slider_horizontaler_slider_fokus';
  info: {
    displayName: 'Horizontaler Slider - Fokus auf eine Karte';
    description: '';
  };
  attributes: {
    ueberschrift: Attribute.Component<'utils.heading'>;
    cards: Attribute.Component<'slider.slider-card-2', true>;
    button: Attribute.Component<'utils.button'>;
    sichtbar: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    background_anzeigen: Attribute.Boolean & Attribute.DefaultTo<true>;
    karten_ausserhalb_anzeigen: Attribute.Boolean & Attribute.DefaultTo<true>;
    autoplay: Attribute.Component<'utils.autoplay-einstellungen'>;
    embla_optionen: Attribute.Component<'utils.embla-optionen'>;
  };
}

export interface SliderHorizontalerSlider extends Schema.Component {
  collectionName: 'components_slider_horizontaler_sliders';
  info: {
    displayName: 'Horizontaler Slider';
    description: '';
  };
  attributes: {
    uberschrift: Attribute.Component<'utils.heading'>;
    cards: Attribute.Component<'slider.slider-card', true>;
    sichtbar: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    embla_optionen: Attribute.Component<'utils.embla-optionen'>;
  };
}

export interface SliderSliderCard2 extends Schema.Component {
  collectionName: 'components_slider_slider_card_2s';
  info: {
    displayName: 'Slider - Card 2';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    ueberschrift: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    vorteile: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    medien: Attribute.Media;
    button_text: Attribute.String;
    button_url: Attribute.String;
  };
}

export interface SliderSliderCard extends Schema.Component {
  collectionName: 'components_slider_slider_cards';
  info: {
    displayName: 'Slider - Card 1';
    description: '';
  };
  attributes: {
    ueberschrift: Attribute.String;
    icon: Attribute.Media;
    icon_text: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface UtilsAutoplayEinstellungen extends Schema.Component {
  collectionName: 'components_utils_autoplay_einstellungens';
  info: {
    displayName: 'Autoplay Einstellungen';
    icon: 'play';
  };
  attributes: {
    ist_aktiv: Attribute.Boolean & Attribute.DefaultTo<false>;
    dauer: Attribute.Integer & Attribute.DefaultTo<5>;
  };
}

export interface UtilsBadge extends Schema.Component {
  collectionName: 'components_utils_badges';
  info: {
    displayName: 'Badge';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.String & Attribute.Required;
  };
}

export interface UtilsButton extends Schema.Component {
  collectionName: 'components_utils_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    variante: Attribute.Enumeration<['PRIMARY', 'SECONDARY', 'TEXT']> &
      Attribute.Required &
      Attribute.DefaultTo<'PRIMARY'>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface UtilsEmblaOptionen extends Schema.Component {
  collectionName: 'components_utils_embla_optionens';
  info: {
    displayName: 'embla_optionen';
  };
  attributes: {
    start_index: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    loop: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface UtilsGoogleReviewer extends Schema.Component {
  collectionName: 'components_utils_google_reviewers';
  info: {
    displayName: 'Reviewer';
    description: '';
  };
  attributes: {
    photo_url: Attribute.String;
    name: Attribute.String;
    ist_anonym: Attribute.Boolean;
  };
}

export interface UtilsGridElement extends Schema.Component {
  collectionName: 'components_utils_grid_elements';
  info: {
    displayName: 'Grid Element';
    description: '';
  };
  attributes: {
    bild: Attribute.Media;
    titel: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface UtilsHeading extends Schema.Component {
  collectionName: 'components_utils_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    topline: Attribute.String;
    heading: Attribute.String;
    typ: Attribute.Enumeration<['H1', 'H2']> &
      Attribute.Required &
      Attribute.DefaultTo<'H2'>;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface UtilsJobsEinstellungen extends Schema.Component {
  collectionName: 'components_utils_jobs_einstellungens';
  info: {
    displayName: 'Jobs Einstellungen';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    button_inhalt: Attribute.String;
    button_url: Attribute.String;
  };
}

export interface UtilsKontakt extends Schema.Component {
  collectionName: 'components_utils_kontakts';
  info: {
    displayName: 'Kontakt';
    icon: 'phone';
  };
  attributes: {
    type: Attribute.Enumeration<['ADRESSE', 'EMAIL', 'TELEFON']>;
    inhalt: Attribute.String;
  };
}

export interface UtilsLogo extends Schema.Component {
  collectionName: 'components_utils_logos';
  info: {
    displayName: 'Logo';
    icon: 'landscape';
  };
  attributes: {
    logo_standard: Attribute.Media & Attribute.Required;
    logo_hell: Attribute.Media;
    logo_dunkel: Attribute.Media;
  };
}

export interface UtilsSocialMedia extends Schema.Component {
  collectionName: 'components_utils_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'heart';
  };
  attributes: {
    typ: Attribute.Enumeration<
      ['META', 'INSTAGRAM', 'X', 'LINKED_IN', 'YOUTUBE']
    >;
    url: Attribute.Text;
  };
}

export interface UtilsText extends Schema.Component {
  collectionName: 'components_utils_texts';
  info: {
    displayName: 'Text';
    icon: 'pencil';
  };
  attributes: {
    inhalt: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface UtilsTimelineKarte extends Schema.Component {
  collectionName: 'components_utils_timeline_kartes';
  info: {
    displayName: 'Timeline Karte';
    description: '';
  };
  attributes: {
    media: Attribute.Media;
    zeitpunkt: Attribute.Date & Attribute.Required;
    titel: Attribute.String & Attribute.Required;
    beschreibung: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.antwortmoeglichkeit': FormAntwortmoeglichkeit;
      'form.daten': FormDaten;
      'form.datum-uhrzeit': FormDatumUhrzeit;
      'form.datum': FormDatum;
      'form.long-text': FormLongText;
      'form.multiple-choice': FormMultipleChoice;
      'form.text-form': FormTextForm;
      'form.uhrzeit': FormUhrzeit;
      'headings.heading-minimalistisch': HeadingsHeadingMinimalistisch;
      'headings.heading-mit-video': HeadingsHeadingMitVideo;
      'heros.hero-1': HerosHero1;
      'integrationen.bewertungen': IntegrationenBewertungen;
      'integrationen.formular': IntegrationenFormular;
      'integrationen.jobs': IntegrationenJobs;
      'listen.grid-liste': ListenGridListe;
      'listen.industrie-liste': ListenIndustrieListe;
      'listen.timeline-liste': ListenTimelineListe;
      'sektionen.inhalt-mit-media': SektionenInhaltMitMedia;
      'shared.cookie-button': SharedCookieButton;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'slider.horizontaler-slider-fokus': SliderHorizontalerSliderFokus;
      'slider.horizontaler-slider': SliderHorizontalerSlider;
      'slider.slider-card-2': SliderSliderCard2;
      'slider.slider-card': SliderSliderCard;
      'utils.autoplay-einstellungen': UtilsAutoplayEinstellungen;
      'utils.badge': UtilsBadge;
      'utils.button': UtilsButton;
      'utils.embla-optionen': UtilsEmblaOptionen;
      'utils.google-reviewer': UtilsGoogleReviewer;
      'utils.grid-element': UtilsGridElement;
      'utils.heading': UtilsHeading;
      'utils.jobs-einstellungen': UtilsJobsEinstellungen;
      'utils.kontakt': UtilsKontakt;
      'utils.logo': UtilsLogo;
      'utils.social-media': UtilsSocialMedia;
      'utils.text': UtilsText;
      'utils.timeline-karte': UtilsTimelineKarte;
    }
  }
}
