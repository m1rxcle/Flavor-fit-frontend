/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

/** Уровень активности */
export const ActivityLevel = {
  /** Активный */
  Active: 'ACTIVE',
  /** Легкий */
  Light: 'LIGHT',
  /** Средний */
  Moderate: 'MODERATE',
  /** Сидячий */
  Sedentary: 'SEDENTARY',
  /** Очень активный */
  VeryActive: 'VERY_ACTIVE'
} as const;

export type ActivityLevel = typeof ActivityLevel[keyof typeof ActivityLevel];
export type AuthResponse = {
  __typename?: 'AuthResponse';
  /** Access token */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** Кастомное сообщение */
  message?: Maybe<Scalars['String']['output']>;
  /** Профиль пользователя */
  user?: Maybe<UserProfileModel>;
};

/** Модель измерений пользователя которые можно изменить */
export type BodyMeasurementInput = {
  /** Уровень активности пользователя */
  activityLevel?: InputMaybe<ActivityLevel>;
  /** Обхват рук пользователя */
  armCm?: InputMaybe<Scalars['String']['input']>;
  /** Обхват груди пользователя */
  chestCm?: InputMaybe<Scalars['String']['input']>;
  /** Целевой вес пользователя */
  goalWeightKg?: InputMaybe<Scalars['String']['input']>;
  /** Рост пользователя */
  heightCm?: InputMaybe<Scalars['String']['input']>;
  /** Цель питания пользователя */
  nutritionalGoal?: InputMaybe<NutritionalGoals>;
  /** Обхват бедер пользователя */
  thighCm?: InputMaybe<Scalars['String']['input']>;
  /** Обхват талии пользователя */
  waistCm?: InputMaybe<Scalars['String']['input']>;
  /** Вес пользователя */
  weightKg?: InputMaybe<Scalars['String']['input']>;
};

/** Модель измерений тела пользователя */
export type BodyMeasurementsModel = {
  __typename?: 'BodyMeasurementsModel';
  /** Уровень активности пользователя */
  activityLevel?: Maybe<ActivityLevel>;
  /** Обхват рук пользователя */
  armCm?: Maybe<Scalars['String']['output']>;
  /** Обхват груди пользователя */
  chestCm?: Maybe<Scalars['String']['output']>;
  /** Дата создания модели */
  createdAt: Scalars['DateTime']['output'];
  /** Целевой вес пользователя */
  goalWeightKg?: Maybe<Scalars['String']['output']>;
  /** Рост пользователя */
  heightCm?: Maybe<Scalars['String']['output']>;
  /** Уникальный идентификатор модели */
  id: Scalars['ID']['output'];
  /** Цель питания пользователя */
  nutritionalGoal?: Maybe<NutritionalGoals>;
  /** Обхват бедер пользователя */
  thighCm?: Maybe<Scalars['String']['output']>;
  /** Дата обновления модели */
  updatedAt: Scalars['DateTime']['output'];
  /** Уникальный идентификатор пользователя */
  userId: Scalars['String']['output'];
  /** Обхват талии пользователя */
  waistCm?: Maybe<Scalars['String']['output']>;
  /** Вес пользователя */
  weightKg?: Maybe<Scalars['String']['output']>;
};

export type ChangeEmailInput = {
  newEmail: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type CommentInput = {
  /** Содержание комментария */
  content: Scalars['String']['input'];
  /** ID рецепта */
  recipeId: Scalars['String']['input'];
};

/** Комментарии к рецепту */
export type CommentsModel = {
  __typename?: 'CommentsModel';
  /** ID автора комментария */
  authorId: Scalars['String']['output'];
  /** Содержание комментария */
  content: Scalars['String']['output'];
  /** Дата создания комментария */
  createdAt: Scalars['DateTime']['output'];
  /** ID комментария */
  id: Scalars['ID']['output'];
  /** ID рецепта */
  recipeId: Scalars['String']['output'];
  /** Дата обновления комментария */
  updatedAt: Scalars['DateTime']['output'];
};

export type ConfirmationInput = {
  token: Scalars['String']['input'];
};

/** Сложность рецепта */
export const Difficulty = {
  /** Легкий */
  Easy: 'EASY',
  /** Сложный */
  Hard: 'HARD',
  /** Средний */
  Medium: 'MEDIUM'
} as const;

export type Difficulty = typeof Difficulty[keyof typeof Difficulty];
/** Гендеры пользователей */
export const Genders = {
  /** Женский */
  Female: 'FEMALE',
  /** Мужской */
  Male: 'MALE'
} as const;

export type Genders = typeof Genders[keyof typeof Genders];
/** Ингредиент */
export type IngredientInput = {
  /** Единица измерения */
  description: Scalars['String']['input'];
  /** Ссылка на картинку ингредиента */
  iconUrl: Scalars['String']['input'];
  /** Цена ингредиента */
  price: Scalars['Float']['input'];
  /** Название ингредиента */
  title: Scalars['String']['input'];
};

export type IngredientModel = {
  __typename?: 'IngredientModel';
  /** Дата создания ингредиента */
  createdAt: Scalars['DateTime']['output'];
  /** Описание ингредиента */
  description: Scalars['String']['output'];
  /** Ссылка на картинку ингредиента */
  iconUrl: Scalars['String']['output'];
  /** ID ингредиента */
  id: Scalars['ID']['output'];
  /** Цена ингредиента */
  price: Scalars['Float']['output'];
  /** Название ингредиента */
  title: Scalars['String']['output'];
  /** Дата обновления ингредиента */
  updatedAt: Scalars['DateTime']['output'];
};

/** Обновление ингредиента */
export type IngredientUpdateInput = {
  /** Описание ингредиента */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Ссылка на картинку ингредиента */
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Цена ингредиента */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Название ингредиента */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Модель лайка */
export type LikeModel = {
  __typename?: 'LikeModel';
  /** Дата создания лайка */
  createdAt: Scalars['DateTime']['output'];
  /** ID лайка */
  id: Scalars['ID']['output'];
  /** ID рецепта */
  recipeId: Scalars['String']['output'];
  /** Дата обновления лайка */
  updatedAt: Scalars['DateTime']['output'];
  /** ID пользователя */
  userId: Scalars['String']['output'];
};

/** Результат лайка */
export type LikeResponse = {
  __typename?: 'LikeResponse';
  /** Лайкнут ли рецепт */
  isLiked: Scalars['Boolean']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeEmail: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  createComment: CommentsModel;
  createIngredient: IngredientModel;
  createOrder: Order;
  createRecipe: RecipeModel;
  deleteComment: Scalars['Boolean']['output'];
  deleteIngredient: Scalars['Boolean']['output'];
  deleteRecipe: Scalars['Boolean']['output'];
  disableTwoFactor: Scalars['Boolean']['output'];
  editComment: Scalars['Boolean']['output'];
  enableTwoFactor: Scalars['Boolean']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  newPassword: Scalars['Boolean']['output'];
  refresh: AuthResponse;
  register: RegisterResponse;
  resendVerificationEmail: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  toggleLike: LikeResponse;
  updateIngredient: IngredientModel;
  updateProfile: UserProfileModel;
  updateRecipe: RecipeModel;
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationChangeEmailArgs = {
  data: ChangeEmailInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreateCommentArgs = {
  input: CommentInput;
};


export type MutationCreateIngredientArgs = {
  data: IngredientInput;
};


export type MutationCreateOrderArgs = {
  input: OrderCreateInput;
};


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['String']['input'];
};


export type MutationEditCommentArgs = {
  id: Scalars['String']['input'];
  input: CommentInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationNewPasswordArgs = {
  data: NewPasswordInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationResendVerificationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  data: RecoveryInput;
};


export type MutationToggleLikeArgs = {
  recipeId: Scalars['String']['input'];
};


export type MutationUpdateIngredientArgs = {
  data: IngredientUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  data: UserUpdateInput;
};


export type MutationUpdateRecipeArgs = {
  data: RecipeCreateInput;
  id: Scalars['String']['input'];
};


export type MutationVerifyEmailArgs = {
  data: ConfirmationInput;
};

export type NewPasswordInput = {
  confirmPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type NutritionFactCreateInput = {
  /** Количество углеводов */
  carbohydrates: Scalars['Float']['input'];
  /** Количество жиров */
  fats: Scalars['Float']['input'];
  /** Количество клетчатки */
  fiber: Scalars['Float']['input'];
  /** Количество белков */
  proteins: Scalars['Float']['input'];
};

export type NutritionFactModel = {
  __typename?: 'NutritionFactModel';
  /** Количество углеводов */
  carbohydrates: Scalars['Float']['output'];
  /** Дата создания */
  createdAt: Scalars['DateTime']['output'];
  /** Количество жиров */
  fats: Scalars['Float']['output'];
  /** Количество клетчатки */
  fiber: Scalars['Float']['output'];
  /** ID */
  id: Scalars['String']['output'];
  /** Количество белков */
  proteins: Scalars['Float']['output'];
  /** ID рецепта */
  recipeId: Scalars['String']['output'];
  /** Дата обновления */
  updatedAt: Scalars['DateTime']['output'];
};

/** Цели питания */
export const NutritionalGoals = {
  /** Поддержание веса */
  Maintenance: 'MAINTENANCE',
  /** Набор мышечного массы */
  MuscleGain: 'MUSCLE_GAIN',
  /** Снижение веса */
  WeightLoss: 'WEIGHT_LOSS'
} as const;

export type NutritionalGoals = typeof NutritionalGoals[keyof typeof NutritionalGoals];
export type Order = {
  __typename?: 'Order';
  /** Дата создания заказа */
  createdAt: Scalars['DateTime']['output'];
  /** ID заказа */
  id: Scalars['String']['output'];
  /** Позиции заказа */
  items?: Maybe<Array<OrderItemModel>>;
  /** ID Заказа */
  orderId: Scalars['Int']['output'];
  /** Статус заказа */
  status: OrderStatus;
  /** Итоговая сумма заказа */
  totalAmount: Scalars['Float']['output'];
  /** Дата обновления заказа */
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderCreateInput = {
  /** Позиции заказа */
  items: Array<OrderItemInput>;
};

export type OrderItemInput = {
  /** ID ингредиента */
  ingredientId: Scalars['ID']['input'];
  /** Количество ингредиента */
  quantity?: Scalars['Float']['input'];
  /** Единица измерения */
  unit: Unit;
};

export type OrderItemModel = {
  __typename?: 'OrderItemModel';
  /** Дата создания заказа */
  createdAt: Scalars['DateTime']['output'];
  /** ID заказа */
  id: Scalars['String']['output'];
  /** Конкретный ингредиент */
  ingredient: IngredientModel;
  /** Цена за единицу */
  pricePerUnit: Scalars['Float']['output'];
  /** Количество */
  quantity: Scalars['Float']['output'];
  /** Общая цена */
  totalPrice: Scalars['Float']['output'];
  /** Единица измерения */
  unit: Unit;
  /** Дата обновления заказа */
  updatedAt: Scalars['DateTime']['output'];
};

/** Статус заказа */
export const OrderStatus = {
  /** Отменен */
  Canceled: 'CANCELED',
  /** Выполнен */
  Completed: 'COMPLETED',
  /** В ожидании */
  Pending: 'PENDING',
  /** В обработке */
  Processing: 'PROCESSING'
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];
/** Данные профиля пользователя которые можно изменить */
export type ProfileInput = {
  /** Возраст пользователя */
  age?: InputMaybe<Scalars['Int']['input']>;
  /** Биография пользователя */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** Полное имя пользователя */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** Пол пользователя */
  gender?: InputMaybe<Genders>;
  /** Ссылка на картинку профиля */
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  /** Ссылки на сайты пользователя */
  sites?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Модель профиля пользователя */
export type ProfileModel = {
  __typename?: 'ProfileModel';
  /** Возраст пользователя */
  age?: Maybe<Scalars['Int']['output']>;
  /** Биография пользователя */
  bio?: Maybe<Scalars['String']['output']>;
  /** Дата создания профиля */
  createdAt: Scalars['DateTime']['output'];
  /** Полное имя пользователя */
  fullName?: Maybe<Scalars['String']['output']>;
  /** Пол пользователя */
  gender: Genders;
  /** Уникальный идентификатор профиля */
  id: Scalars['ID']['output'];
  /** Ссылка на картинку профиля */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Ссылки на сайты пользователя */
  sites?: Maybe<Array<Scalars['String']['output']>>;
  /** Дата обновления профиля */
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllCommentsFromRecipe: Array<CommentsModel>;
  getAllIngredients: Array<IngredientModel>;
  getAllLikesFromRecipe: Scalars['Int']['output'];
  getAllOrdersFromId: Array<Order>;
  getAllRecipes: Array<RecipeModel>;
  /** Получить всех пользователей */
  getAllUsers: Array<UserProfileModel>;
  getIngredientById: IngredientModel;
  /** Получить пользователя по id */
  getMe: UserProfileModel;
  getRecipeById: RecipeModel;
  getRecipeBySlug: RecipeModel;
  getRecipeFilters: Array<RecipeModel>;
  searchRecipes: Array<RecipeModel>;
  sortRecipes: Array<RecipeModel>;
};


export type QueryGetAllCommentsFromRecipeArgs = {
  recipeId: Scalars['String']['input'];
};


export type QueryGetAllLikesFromRecipeArgs = {
  recipeId: Scalars['String']['input'];
};


export type QueryGetAllRecipesArgs = {
  take?: Scalars['Float']['input'];
};


export type QueryGetIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRecipeBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QuerySearchRecipesArgs = {
  searchTerm: Scalars['String']['input'];
};


export type QuerySortRecipesArgs = {
  sortBy: SortByEnum;
};

export type RecipeCreateInput = {
  /** Количество калорий */
  calories: Scalars['Int']['input'];
  /** Время приготовления */
  cookingTime: Scalars['Int']['input'];
  /** Описание рецепта */
  description: Scalars['String']['input'];
  /** Сложность рецепта */
  difficulty: Difficulty;
  /** Ссылка на картинку рецепта */
  imageUrl: Scalars['String']['input'];
  /** Факты питания рецепта */
  nutritionFact: NutritionFactCreateInput;
  /** Ингредиенты рецепта */
  recipeIngredients: Array<RecipeIngredientCreateInput>;
  /** Шаги рецепта */
  recipeStep: Array<RecipeStepCreateInput>;
  /** Slug рецепта */
  slug: Scalars['String']['input'];
  /** Теги рецепта */
  tag: Array<RecipeTagCreateInput>;
  /** Название рецепта */
  title: Scalars['String']['input'];
};

export type RecipeIngredientCreateInput = {
  /** ID ингредиента */
  ingredientId: Scalars['ID']['input'];
  /** Количество ингредиента */
  quantity: Scalars['Float']['input'];
  /** Единица измерения */
  unit: Unit;
};

export type RecipeIngredientModel = {
  __typename?: 'RecipeIngredientModel';
  /** Цена ингредиента */
  createdAt: Scalars['DateTime']['output'];
  /** ID ингредиента */
  id: Scalars['String']['output'];
  /** Название ингредиента */
  ingredientId: Scalars['String']['output'];
  /** Количество ингредиента */
  quantity: Scalars['Float']['output'];
  /** ID рецепта */
  recipeId: Scalars['String']['output'];
  /** Единица измерения */
  unit: Unit;
  /** Дата обновления ингредиента */
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeModel = {
  __typename?: 'RecipeModel';
  /** Автор рецепта */
  author: UserProfileModel;
  /** ID автора рецепта */
  authorId: Scalars['String']['output'];
  /** Количество калорий */
  calories: Scalars['Int']['output'];
  /** Комментарии рецепта */
  comments?: Maybe<Array<CommentsModel>>;
  /** Время приготовления */
  cookingTime: Scalars['Int']['output'];
  /** Дата создания рецепта */
  createdAt: Scalars['DateTime']['output'];
  /** Описание рецепта */
  description: Scalars['String']['output'];
  /** Сложность рецепта */
  difficulty: Difficulty;
  /** ID рецепта */
  id: Scalars['ID']['output'];
  /** Ссылка на картинку рецепта */
  imageUrl: Scalars['String']['output'];
  /** Лайки рецепта */
  likes?: Maybe<Array<LikeModel>>;
  /** Факты питания рецепта */
  nutritionFact: NutritionFactModel;
  /** Ингредиенты рецепта */
  recipeIngredients: Array<RecipeIngredientModel>;
  /** Шаги рецепта */
  recipeStep: Array<RecipeStepModel>;
  /** Slug рецепта */
  slug: Scalars['String']['output'];
  /** Теги рецепта */
  tag: Array<RecipeTagModel>;
  /** Название рецепта */
  title: Scalars['String']['output'];
  /** Дата обновления рецепта */
  updatedAt: Scalars['DateTime']['output'];
  /** Просмотры рецепта */
  views?: Maybe<Array<ViewModel>>;
};

export type RecipeStepCreateInput = {
  /** Описание шага */
  description: Scalars['String']['input'];
  /** Ссылка на картинку шага */
  imageUrl: Scalars['String']['input'];
  /** Порядковый номер шага */
  order: Scalars['Int']['input'];
  /** Название шага */
  title: Scalars['String']['input'];
};

export type RecipeStepModel = {
  __typename?: 'RecipeStepModel';
  /** Дата создания шага */
  createdAt: Scalars['DateTime']['output'];
  /** Описание шага */
  description: Scalars['String']['output'];
  /** ID шага */
  id: Scalars['String']['output'];
  /** Ссылка на картинку шага */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Порядковый номер шага */
  order: Scalars['Int']['output'];
  /** ID рецепта */
  recipeId: Scalars['String']['output'];
  /** Название шага */
  title: Scalars['String']['output'];
  /** Дата обновления шага */
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeTagCreateInput = {
  name: Scalars['String']['input'];
};

export type RecipeTagModel = {
  __typename?: 'RecipeTagModel';
  /** Дата создания тега */
  createdAt: Scalars['DateTime']['output'];
  /** ID тега */
  id: Scalars['String']['output'];
  /** Название тега */
  name: Scalars['String']['output'];
  /** Дата обновления тега */
  updatedAt: Scalars['DateTime']['output'];
};

export type RecoveryInput = {
  email: Scalars['String']['input'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  /** Email зарегистрированного пользователя */
  email: Scalars['String']['output'];
  /** Успешность регистрации */
  success: Scalars['Boolean']['output'];
};

/** Роли пользователей */
export const Role = {
  /** Администратор с полным доступом */
  Admin: 'ADMIN',
  /** Обычный пользователь */
  User: 'USER'
} as const;

export type Role = typeof Role[keyof typeof Role];
/** Сортировка рецептов */
export const SortByEnum = {
  /** По умолчанию */
  Default: 'DEFAULT',
  /** По популярности */
  Popularity: 'POPULARITY',
  /** По рекомендациям */
  Recommended: 'RECOMMENDED'
} as const;

export type SortByEnum = typeof SortByEnum[keyof typeof SortByEnum];
/** Единица измерения */
export const Unit = {
  /** Зубчик */
  Cloves: 'CLOVES',
  /** Чашка */
  Cup: 'CUP',
  /** Грамм */
  Gram: 'GRAM',
  /** Миллилитр */
  Milliliter: 'MILLILITER',
  /** Кусок */
  Piece: 'PIECE',
  /** Столовая ложка */
  Tablespoon: 'TABLESPOON',
  /** Чайная ложка */
  Teaspoon: 'TEASPOON'
} as const;

export type Unit = typeof Unit[keyof typeof Unit];
/** Модель пользователя */
export type UserProfileModel = {
  __typename?: 'UserProfileModel';
  /** Дата создания пользователя */
  createdAt: Scalars['DateTime']['output'];
  /** Почта пользователя */
  email: Scalars['String']['output'];
  /** Полное имя пользователя */
  fullName: Scalars['String']['output'];
  /** Уникальный идентификатор пользователя */
  id: Scalars['ID']['output'];
  /** Включен ли двухфакторная аутентификация */
  isTwoFactorEnabled: Scalars['Boolean']['output'];
  /** Верифицирован ли пользователь */
  isVerified: Scalars['Boolean']['output'];
  /** Модель измерений тела */
  measurements?: Maybe<BodyMeasurementsModel>;
  /** Профиль пользователя */
  profile?: Maybe<ProfileModel>;
  /** Роль пользователя */
  role: Role;
  /** Дата обновления пользователя */
  updatedAt: Scalars['DateTime']['output'];
};

/** Данные пользователя которые могут быть изменены */
export type UserUpdateInput = {
  /** Почта пользователя */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Полное имя пользователя */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** Модель измерений тела */
  measurements?: InputMaybe<BodyMeasurementInput>;
  /** Профиль пользователя */
  profile?: InputMaybe<ProfileInput>;
};

export type ViewModel = {
  __typename?: 'ViewModel';
  /** Дата создания просмотра */
  createdAt: Scalars['DateTime']['output'];
  /** ID просмотра */
  id: Scalars['String']['output'];
  /** ID рецепта */
  recipeId: Scalars['String']['output'];
  /** Дата обновления просмотра */
  updatedAt: Scalars['DateTime']['output'];
  /** ID пользователя */
  userId: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken?: string | null, message?: string | null, user?: { __typename?: 'UserProfileModel', fullName: string, email: string, role: Role } | null } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logout: boolean };

export type NewPasswordMutationVariables = Exact<{
  data: NewPasswordInput;
}>;


export type NewPasswordMutation = { __typename?: 'Mutation', newPassword: boolean };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthResponse', accessToken?: string | null, user?: { __typename?: 'UserProfileModel', id: string, fullName: string, email: string, role: Role } | null } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', success: boolean, email: string } };

export type ResendVerificationEmailMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type ResendVerificationEmailMutation = { __typename?: 'Mutation', resendVerificationEmail: boolean };

export type ResetPasswordMutationVariables = Exact<{
  data: RecoveryInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type VerifyMutationVariables = Exact<{
  data: ConfirmationInput;
}>;


export type VerifyMutation = { __typename?: 'Mutation', verifyEmail: boolean };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'UserProfileModel', id: string, email: string, fullName: string, isTwoFactorEnabled: boolean, isVerified: boolean, role: Role, profile?: { __typename?: 'ProfileModel', age?: number | null, bio?: string | null, gender: Genders, imageUrl?: string | null, sites?: Array<string> | null } | null, measurements?: { __typename?: 'BodyMeasurementsModel', chestCm?: string | null, weightKg?: string | null } | null } };

export type GetAllRecipesQueryVariables = Exact<{
  data: Scalars['Float']['input'];
}>;


export type GetAllRecipesQuery = { __typename?: 'Query', getAllRecipes: Array<{ __typename?: 'RecipeModel', id: string, imageUrl: string, title: string, description: string, calories: number, cookingTime: number, difficulty: Difficulty, slug: string, likes?: Array<{ __typename?: 'LikeModel', userId: string }> | null, views?: Array<{ __typename?: 'ViewModel', id: string, userId: string }> | null }> };

export type GetByIdRecipeQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetByIdRecipeQuery = { __typename?: 'Query', getRecipeById: { __typename?: 'RecipeModel', id: string, title: string, description: string, difficulty: Difficulty, nutritionFact: { __typename?: 'NutritionFactModel', carbohydrates: number, fats: number, fiber: number }, recipeIngredients: Array<{ __typename?: 'RecipeIngredientModel', quantity: number, ingredientId: string, unit: Unit }> } };

export type GetBySlugRecipeQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBySlugRecipeQuery = { __typename?: 'Query', getRecipeBySlug: { __typename?: 'RecipeModel', id: string, title: string, description: string, difficulty: Difficulty, likes?: Array<{ __typename?: 'LikeModel', id: string, userId: string }> | null, views?: Array<{ __typename?: 'ViewModel', id: string, userId: string }> | null } };

export type GetRecipeFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecipeFiltersQuery = { __typename?: 'Query', getRecipeFilters: Array<{ __typename?: 'RecipeModel', difficulty: Difficulty, tag: Array<{ __typename?: 'RecipeTagModel', name: string }> }> };

export type SearchRecipeQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
}>;


export type SearchRecipeQuery = { __typename?: 'Query', searchRecipes: Array<{ __typename?: 'RecipeModel', title: string, slug: string, description: string, tag: Array<{ __typename?: 'RecipeTagModel', name: string }>, recipeIngredients: Array<{ __typename?: 'RecipeIngredientModel', ingredientId: string }> }> };

export type SortRecipeQueryVariables = Exact<{
  sortBy: SortByEnum;
}>;


export type SortRecipeQuery = { __typename?: 'Query', sortRecipes: Array<{ __typename?: 'RecipeModel', id: string, title: string, slug: string, description: string, createdAt: any, updatedAt: any, likes?: Array<{ __typename?: 'LikeModel', userId: string }> | null, tag: Array<{ __typename?: 'RecipeTagModel', name: string }>, views?: Array<{ __typename?: 'ViewModel', userId: string }> | null }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
export const NewPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<NewPasswordMutation, NewPasswordMutationVariables>;
export const RefreshTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const ResendVerificationEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendVerificationEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendVerificationEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecoveryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Verify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<VerifyMutation, VerifyMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"isTwoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"sites"}}]}},{"kind":"Field","name":{"kind":"Name","value":"measurements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chestCm"}},{"kind":"Field","name":{"kind":"Name","value":"weightKg"}}]}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetAllRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRecipes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllRecipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"cookingTime"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"views"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllRecipesQuery, GetAllRecipesQueryVariables>;
export const GetByIdRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetByIdRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRecipeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"nutritionFact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"carbohydrates"}},{"kind":"Field","name":{"kind":"Name","value":"fats"}},{"kind":"Field","name":{"kind":"Name","value":"fiber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipeIngredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"ingredientId"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}}]}}]}}]} as unknown as DocumentNode<GetByIdRecipeQuery, GetByIdRecipeQueryVariables>;
export const GetBySlugRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBySlugRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRecipeBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"views"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<GetBySlugRecipeQuery, GetBySlugRecipeQueryVariables>;
export const GetRecipeFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecipeFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRecipeFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetRecipeFiltersQuery, GetRecipeFiltersQueryVariables>;
export const SearchRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchRecipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"recipeIngredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingredientId"}}]}}]}}]}}]} as unknown as DocumentNode<SearchRecipeQuery, SearchRecipeQueryVariables>;
export const SortRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SortRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortByEnum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sortRecipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"views"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SortRecipeQuery, SortRecipeQueryVariables>;