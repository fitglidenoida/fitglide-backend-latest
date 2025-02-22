import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    mobile: Schema.Attribute.BigInteger &
      Schema.Attribute.SetMinMax<
        {
          max: '10';
        },
        string
      >;
    First_name: Schema.Attribute.String;
    Last_name: Schema.Attribute.String;
    Address_line_1: Schema.Attribute.String;
    City: Schema.Attribute.String;
    State: Schema.Attribute.String;
    Created_date: Schema.Attribute.DateTime;
    modified_date: Schema.Attribute.DateTime;
    Activity_selected: Schema.Attribute.Enumeration<
      ['Cardio', 'Strength ', 'Cycling', 'Running']
    >;
    your_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    workout_plans: Schema.Attribute.Relation<
      'oneToMany',
      'api::workout-plan.workout-plan'
    >;
    subscriptions: Schema.Attribute.Relation<
      'oneToMany',
      'api::subscription.subscription'
    >;
    athlete_id: Schema.Attribute.BigInteger;
    strava_inputs: Schema.Attribute.Relation<
      'oneToMany',
      'api::strava-input.strava-input'
    >;
    image: Schema.Attribute.String;
    health_vitals: Schema.Attribute.Relation<
      'oneToMany',
      'api::health-vital.health-vital'
    >;
    weightlogs: Schema.Attribute.Relation<
      'oneToMany',
      'api::weightlog.weightlog'
    >;
    authprovider: Schema.Attribute.Enumeration<
      ['FitGlide', 'Google', 'Facebook']
    >;
    sleeplogs: Schema.Attribute.Relation<'oneToMany', 'api::sleeplog.sleeplog'>;
    diet_plans: Schema.Attribute.Relation<
      'oneToMany',
      'api::diet-plan.diet-plan'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiDietComponentDietComponent
  extends Struct.CollectionTypeSchema {
  collectionName: 'diet_components';
  info: {
    singularName: 'diet-component';
    pluralName: 'diet-components';
    displayName: 'Diet_component';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    component_id: Schema.Attribute.UID;
    name: Schema.Attribute.String;
    category: Schema.Attribute.String;
    recipe_url: Schema.Attribute.String;
    brand: Schema.Attribute.String;
    total_fat: Schema.Attribute.String;
    saturated_fat: Schema.Attribute.String;
    carbohydrate: Schema.Attribute.String;
    sugar: Schema.Attribute.String;
    fiber: Schema.Attribute.String;
    protein: Schema.Attribute.String;
    sodium: Schema.Attribute.String;
    vitamin_c: Schema.Attribute.String;
    calcium: Schema.Attribute.String;
    iron: Schema.Attribute.String;
    potassium: Schema.Attribute.String;
    cholestrol: Schema.Attribute.String;
    calories: Schema.Attribute.Integer;
    food_type: Schema.Attribute.Enumeration<['Veg', 'Non-Veg']>;
    meals: Schema.Attribute.Relation<'manyToMany', 'api::meal.meal'>;
    diet_plan: Schema.Attribute.Relation<
      'manyToOne',
      'api::diet-plan.diet-plan'
    >;
    portion_size: Schema.Attribute.Integer;
    unit: Schema.Attribute.Enumeration<
      ['Nos', 'gm', 'Cup', 'Bowl', 'Glass', 'Tea Cup']
    >;
    cuisine: Schema.Attribute.Enumeration<
      [
        'North Indian',
        'South Indian',
        'Gujarati',
        'Bengali',
        'Marathi',
        'Rajasthani',
        'Punjabi',
        'Kashmiri',
        'Konkani',
        'North Eastern',
      ]
    >;
    meal_suitability: Schema.Attribute.Enumeration<
      [
        'Breakfast, Snack',
        'Breakfast, Lunch, Dinner',
        'Lunch, Dinner',
        'Breakfast',
        'Lunch',
        'Dinner',
        'Snack',
      ]
    >;
    is_common: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::diet-component.diet-component'
    >;
  };
}

export interface ApiDietPlanDietPlan extends Struct.CollectionTypeSchema {
  collectionName: 'diet_plans';
  info: {
    singularName: 'diet-plan';
    pluralName: 'diet-plans';
    displayName: 'Diet_plan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    plan_id: Schema.Attribute.UID;
    total_calories: Schema.Attribute.Integer;
    diet_preference: Schema.Attribute.Enumeration<['Veg', 'Non_Veg']>;
    meals_per_day: Schema.Attribute.Integer;
    Active: Schema.Attribute.Boolean;
    users_permissions_user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    meal_name: Schema.Attribute.String;
    meal_description: Schema.Attribute.String;
    diet_components: Schema.Attribute.Relation<
      'oneToMany',
      'api::diet-component.diet-component'
    >;
    meal_time: Schema.Attribute.Time;
    base_portion: Schema.Attribute.String;
    base_portion_unit: Schema.Attribute.Enumeration<
      ['Nos', 'Bowl', 'Cup', 'Glass', 'Tea Cup']
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::diet-plan.diet-plan'
    >;
  };
}

export interface ApiDietTemplateDietTemplate
  extends Struct.CollectionTypeSchema {
  collectionName: 'diet_templates';
  info: {
    singularName: 'diet-template';
    pluralName: 'diet-templates';
    displayName: 'diet-template';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    diet_template_id: Schema.Attribute.UID;
    plan_name: Schema.Attribute.String;
    total_calories: Schema.Attribute.Integer;
    notes: Schema.Attribute.RichText;
    meals: Schema.Attribute.Relation<'oneToMany', 'api::meal.meal'>;
    diet_preference: Schema.Attribute.Enumeration<['Veg', 'Non-Veg']>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::diet-template.diet-template'
    >;
  };
}

export interface ApiHealthVitalHealthVital extends Struct.CollectionTypeSchema {
  collectionName: 'health_vitals';
  info: {
    singularName: 'health-vital';
    pluralName: 'health-vitals';
    displayName: 'HealthVital';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vitalid: Schema.Attribute.UID;
    DateTime: Schema.Attribute.DateTime;
    UploadClient: Schema.Attribute.String;
    WeightInKilograms: Schema.Attribute.Integer;
    BloodGlucose: Schema.Attribute.Decimal;
    BMR: Schema.Attribute.BigInteger;
    BMI: Schema.Attribute.BigInteger;
    Systolic: Schema.Attribute.BigInteger;
    Diastolic: Schema.Attribute.BigInteger;
    HRV: Schema.Attribute.BigInteger;
    Injury: Schema.Attribute.Enumeration<
      [
        'ExtremelyInjured',
        'VeryInjured',
        'Injured',
        'SlightlyInjured ',
        'Healthy',
      ]
    >;
    InsulinUnits: Schema.Attribute.Integer;
    InsulinType: Schema.Attribute.String;
    MuscleMass: Schema.Attribute.BigInteger;
    Notes: Schema.Attribute.Text;
    PercentFat: Schema.Attribute.Decimal;
    Pulse: Schema.Attribute.BigInteger;
    SleepHours: Schema.Attribute.Integer;
    SPO2: Schema.Attribute.BigInteger;
    Steps: Schema.Attribute.BigInteger;
    UrineColor: Schema.Attribute.Enumeration<
      [
        'Clear',
        'LightYellow',
        'MediumYellow ',
        'Yellow',
        'LightOrange',
        'MediumOrange ',
        'Orange',
      ]
    >;
    WaterConsumption: Schema.Attribute.Integer;
    your_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    weight_loss_goal: Schema.Attribute.Integer;
    weeklytarget: Schema.Attribute.Decimal;
    username: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    gender: Schema.Attribute.Enumeration<['Male', 'Female']>;
    height: Schema.Attribute.Integer;
    date_of_birth: Schema.Attribute.Date;
    bedtime: Schema.Attribute.Time;
    hours_of_sleep: Schema.Attribute.Decimal;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::health-vital.health-vital'
    >;
  };
}

export interface ApiMealMeal extends Struct.CollectionTypeSchema {
  collectionName: 'meals';
  info: {
    singularName: 'meal';
    pluralName: 'meals';
    displayName: 'meal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.String;
    diet_components: Schema.Attribute.Relation<
      'manyToMany',
      'api::diet-component.diet-component'
    >;
    meal_id: Schema.Attribute.UID;
    meal_time: Schema.Attribute.Time;
    base_portion: Schema.Attribute.Integer;
    base_portion_unit: Schema.Attribute.Enumeration<
      ['Nos', 'Bowl', 'Cup', 'Glass', 'Tea Cup']
    >;
    diet_template: Schema.Attribute.Relation<
      'manyToOne',
      'api::diet-template.diet-template'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::meal.meal'>;
  };
}

export interface ApiPlanPlan extends Struct.CollectionTypeSchema {
  collectionName: 'plans';
  info: {
    singularName: 'plan';
    pluralName: 'plans';
    displayName: 'subPlan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    subplan_id: Schema.Attribute.UID;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    amount: Schema.Attribute.BigInteger;
    duration: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::plan.plan'>;
  };
}

export interface ApiSleeplogSleeplog extends Struct.CollectionTypeSchema {
  collectionName: 'sleeplogs';
  info: {
    singularName: 'sleeplog';
    pluralName: 'sleeplogs';
    displayName: 'sleeplog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sleep_log_id: Schema.Attribute.UID;
    sleep_duration: Schema.Attribute.Decimal;
    deep_sleep_duration: Schema.Attribute.Decimal;
    dream_sleep_duration: Schema.Attribute.Decimal;
    light_sleep_duration: Schema.Attribute.Decimal;
    sleep_awake_duration: Schema.Attribute.Decimal;
    date: Schema.Attribute.Date;
    planned_sleep_time: Schema.Attribute.Time;
    actual_sleep_time: Schema.Attribute.Time;
    username: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sleeplog.sleeplog'
    >;
  };
}

export interface ApiStravaInputStravaInput extends Struct.CollectionTypeSchema {
  collectionName: 'strava_inputs';
  info: {
    singularName: 'strava-input';
    pluralName: 'strava-inputs';
    displayName: 'strava-input';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    strava_username: Schema.Attribute.String;
    resource_state: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    distance: Schema.Attribute.Decimal;
    moving_time: Schema.Attribute.BigInteger;
    elapsed_time: Schema.Attribute.BigInteger;
    total_elevation_gain: Schema.Attribute.BigInteger;
    elev_high: Schema.Attribute.BigInteger;
    sport_type: Schema.Attribute.String;
    start_date: Schema.Attribute.DateTime;
    start_date_local: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    start_latlng: Schema.Attribute.Decimal;
    end_latlng: Schema.Attribute.Decimal;
    achievement_count: Schema.Attribute.Integer;
    kudos_count: Schema.Attribute.Integer;
    workout_type: Schema.Attribute.BigInteger;
    upload_id_str: Schema.Attribute.String;
    average_speed: Schema.Attribute.Decimal;
    max_speed: Schema.Attribute.Decimal;
    gear_id: Schema.Attribute.BigInteger;
    description: Schema.Attribute.String;
    photos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    gear: Schema.Attribute.String;
    calories: Schema.Attribute.Decimal;
    kilojoules: Schema.Attribute.Decimal;
    average_watts: Schema.Attribute.Decimal;
    max_watts: Schema.Attribute.Decimal;
    weighted_average_watts: Schema.Attribute.Decimal;
    device_watts: Schema.Attribute.Boolean;
    athlete_id: Schema.Attribute.BigInteger;
    activity_id: Schema.Attribute.BigInteger;
    username: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::strava-input.strava-input'
    >;
  };
}

export interface ApiStructureStructure extends Struct.CollectionTypeSchema {
  collectionName: 'structures';
  info: {
    singularName: 'structure';
    pluralName: 'structures';
    displayName: 'Structure';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    structure_id: Schema.Attribute.UID;
    Name: Schema.Attribute.String;
    intensity_class: Schema.Attribute.Enumeration<
      ['Warm-up', 'Active', 'Repetition', 'Rest', 'Cooldown']
    >;
    length: Schema.Attribute.BigInteger;
    Intensity_Target: Schema.Attribute.BigInteger;
    Min_Value: Schema.Attribute.BigInteger;
    Max_Value: Schema.Attribute.BigInteger;
    workout_plans: Schema.Attribute.Relation<
      'oneToMany',
      'api::workout-plan.workout-plan'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::structure.structure'
    >;
  };
}

export interface ApiSubscriptionSubscription
  extends Struct.CollectionTypeSchema {
  collectionName: 'subscriptions';
  info: {
    singularName: 'subscription';
    pluralName: 'subscriptions';
    displayName: 'subscription';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    subscriptioin_id: Schema.Attribute.UID;
    subscription_start_date: Schema.Attribute.Date;
    subscription_end_date: Schema.Attribute.Date;
    subscription_status: Schema.Attribute.Boolean;
    automatic_renewal: Schema.Attribute.Boolean;
    trial_perio: Schema.Attribute.Integer;
    coupon: Schema.Attribute.String;
    subscription_type: Schema.Attribute.Enumeration<['Recurring', 'Onetime']>;
    username: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subscription.subscription'
    >;
  };
}

export interface ApiUserreviewUserreview extends Struct.CollectionTypeSchema {
  collectionName: 'userreviews';
  info: {
    singularName: 'userreview';
    pluralName: 'userreviews';
    displayName: 'Userreview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comments: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::userreview.userreview'
    >;
  };
}

export interface ApiWeightlogWeightlog extends Struct.CollectionTypeSchema {
  collectionName: 'weightlogs';
  info: {
    singularName: 'weightlog';
    pluralName: 'weightlogs';
    displayName: 'weightlog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logdate: Schema.Attribute.DateTime;
    weight: Schema.Attribute.Decimal;
    username: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::weightlog.weightlog'
    >;
  };
}

export interface ApiWorkoutPlanWorkoutPlan extends Struct.CollectionTypeSchema {
  collectionName: 'workout_plans';
  info: {
    singularName: 'workout-plan';
    pluralName: 'workout-plans';
    displayName: 'workout-plan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    workout_id: Schema.Attribute.UID;
    Completed: Schema.Attribute.Boolean;
    Description: Schema.Attribute.String;
    Distance: Schema.Attribute.Decimal;
    DistancePlanned: Schema.Attribute.BigInteger;
    StartTime: Schema.Attribute.DateTime;
    StartTimePlanned: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String;
    WorkoutDay: Schema.Attribute.DateTime;
    TotalTime: Schema.Attribute.Decimal;
    TotalTimePlanned: Schema.Attribute.Decimal;
    WorkoutFileFormats: Schema.Attribute.String;
    WorkoutType: Schema.Attribute.String;
    Url: Schema.Attribute.String;
    CadenceAverage: Schema.Attribute.BigInteger;
    CadenceMaximum: Schema.Attribute.BigInteger;
    Calories: Schema.Attribute.Decimal;
    CaloriesPlanned: Schema.Attribute.Decimal;
    Energy: Schema.Attribute.Decimal;
    EnergyPlanned: Schema.Attribute.Decimal;
    Feeling: Schema.Attribute.Enumeration<['Strong', 'Normal', 'Weak']>;
    HeartRateAverage: Schema.Attribute.BigInteger;
    HeartRateMaximum: Schema.Attribute.BigInteger;
    HeartRateMinimum: Schema.Attribute.BigInteger;
    NormalizedPower: Schema.Attribute.BigInteger;
    NormalizedSpeed: Schema.Attribute.Decimal;
    VelocityAverage: Schema.Attribute.Decimal;
    VelocityMaximum: Schema.Attribute.Decimal;
    VelocityPlanned: Schema.Attribute.Decimal;
    PowerAverage: Schema.Attribute.Decimal;
    PowerMaximum: Schema.Attribute.BigInteger;
    username: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    structure: Schema.Attribute.Relation<
      'manyToOne',
      'api::structure.structure'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::workout-plan.workout-plan'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::diet-component.diet-component': ApiDietComponentDietComponent;
      'api::diet-plan.diet-plan': ApiDietPlanDietPlan;
      'api::diet-template.diet-template': ApiDietTemplateDietTemplate;
      'api::health-vital.health-vital': ApiHealthVitalHealthVital;
      'api::meal.meal': ApiMealMeal;
      'api::plan.plan': ApiPlanPlan;
      'api::sleeplog.sleeplog': ApiSleeplogSleeplog;
      'api::strava-input.strava-input': ApiStravaInputStravaInput;
      'api::structure.structure': ApiStructureStructure;
      'api::subscription.subscription': ApiSubscriptionSubscription;
      'api::userreview.userreview': ApiUserreviewUserreview;
      'api::weightlog.weightlog': ApiWeightlogWeightlog;
      'api::workout-plan.workout-plan': ApiWorkoutPlanWorkoutPlan;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
