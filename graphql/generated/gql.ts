/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n    message\n  }\n}": typeof types.LoginDocument,
    "mutation LogOut {\n  logout\n}": typeof types.LogOutDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": typeof types.NewPasswordDocument,
    "mutation RefreshTokens {\n  refresh {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n  }\n}": typeof types.RefreshTokensDocument,
    "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    success\n    email\n  }\n}": typeof types.RegisterDocument,
    "mutation ResendVerificationEmail($data: String!) {\n  resendVerificationEmail(email: $data)\n}": typeof types.ResendVerificationEmailDocument,
    "mutation ResetPassword($data: RecoveryInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation Verify($data: ConfirmationInput!) {\n  verifyEmail(data: $data)\n}": typeof types.VerifyDocument,
    "mutation CreateComment($input: CreateCommentInput!) {\n  createComment(input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}": typeof types.CreateCommentDocument,
    "mutation DeleteComment($id: String!) {\n  deleteComment(id: $id)\n}": typeof types.DeleteCommentDocument,
    "mutation EditComment($id: String!, $input: EditCommentInput!) {\n  editComment(id: $id, input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}": typeof types.EditCommentDocument,
    "query GetAllCommentsFromRecipe($recipeId: String!) {\n  getAllCommentsFromRecipe(recipeId: $recipeId) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetAllCommentsFromRecipeDocument,
    "mutation ToggleLike($recipeId: String!) {\n  toggleLike(recipeId: $recipeId) {\n    isLiked\n  }\n}": typeof types.ToggleLikeDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": typeof types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": typeof types.ChangePasswordDocument,
    "mutation Disable2Fa {\n  disableTwoFactor\n}": typeof types.Disable2FaDocument,
    "mutation Enable2Fa {\n  enableTwoFactor\n}": typeof types.Enable2FaDocument,
    "mutation UpdateUserProfile($data: UserUpdateInput!) {\n  updateProfile(data: $data) {\n    id\n    fullName\n    isVerified\n    email\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}": typeof types.UpdateUserProfileDocument,
    "query GetFullProfileAtUser {\n  getMe {\n    id\n    email\n    isVerified\n    isTwoFactorEnabled\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}": typeof types.GetFullProfileAtUserDocument,
    "query GetMe {\n  getMe {\n    id\n    email\n    fullName\n    profile {\n      imageUrl\n    }\n  }\n}": typeof types.GetMeDocument,
    "query GetAllRecipes($data: Float!) {\n  getAllRecipes(take: $data) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": typeof types.GetAllRecipesDocument,
    "query GetByIdRecipe($id: String!) {\n  getRecipeById(id: $id) {\n    id\n    title\n    description\n    difficulty\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n    }\n    recipeIngredients {\n      id\n      quantity\n      unit\n    }\n  }\n}": typeof types.GetByIdRecipeDocument,
    "query GetBySlugRecipe($slug: String!) {\n  getRecipeBySlug(slug: $slug) {\n    id\n    title\n    author {\n      profile {\n        imageUrl\n      }\n      email\n    }\n    description\n    difficulty\n    recipeIngredients {\n      id\n      ingredient {\n        iconUrl\n        title\n      }\n      quantity\n      unit\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n      proteins\n    }\n    tag {\n      name\n    }\n    imageUrl\n    likes {\n      id\n      userId\n    }\n    isLiked\n    views {\n      id\n      userId\n    }\n    comments {\n      id\n      author {\n        id\n        profile {\n          fullName\n          imageUrl\n        }\n      }\n      content\n      createdAt\n    }\n    cookingTime\n    recipeStep {\n      id\n      imageUrl\n      description\n      title\n      order\n    }\n    calories\n  }\n}": typeof types.GetBySlugRecipeDocument,
    "query GetRecipeFilters {\n  getRecipeFilters {\n    difficulty\n    tag {\n      name\n    }\n  }\n}": typeof types.GetRecipeFiltersDocument,
    "query GetLikedRecipes($take: Float!) {\n  getLikedRecipes(take: $take) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": typeof types.GetLikedRecipesDocument,
    "query SearchRecipe($searchTerm: String!) {\n  searchRecipes(searchTerm: $searchTerm) {\n    id\n    imageUrl\n    title\n    description\n    calories\n    cookingTime\n    difficulty\n    slug\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": typeof types.SearchRecipeDocument,
    "query SortRecipe($sortBy: SortByEnum!, $take: Float, $offset: Float) {\n  sortRecipes(take: $take, skip: $offset, sortBy: $sortBy) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": typeof types.SortRecipeDocument,
};
const documents: Documents = {
    "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n    message\n  }\n}": types.LoginDocument,
    "mutation LogOut {\n  logout\n}": types.LogOutDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": types.NewPasswordDocument,
    "mutation RefreshTokens {\n  refresh {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n  }\n}": types.RefreshTokensDocument,
    "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    success\n    email\n  }\n}": types.RegisterDocument,
    "mutation ResendVerificationEmail($data: String!) {\n  resendVerificationEmail(email: $data)\n}": types.ResendVerificationEmailDocument,
    "mutation ResetPassword($data: RecoveryInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation Verify($data: ConfirmationInput!) {\n  verifyEmail(data: $data)\n}": types.VerifyDocument,
    "mutation CreateComment($input: CreateCommentInput!) {\n  createComment(input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}": types.CreateCommentDocument,
    "mutation DeleteComment($id: String!) {\n  deleteComment(id: $id)\n}": types.DeleteCommentDocument,
    "mutation EditComment($id: String!, $input: EditCommentInput!) {\n  editComment(id: $id, input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}": types.EditCommentDocument,
    "query GetAllCommentsFromRecipe($recipeId: String!) {\n  getAllCommentsFromRecipe(recipeId: $recipeId) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}": types.GetAllCommentsFromRecipeDocument,
    "mutation ToggleLike($recipeId: String!) {\n  toggleLike(recipeId: $recipeId) {\n    isLiked\n  }\n}": types.ToggleLikeDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": types.ChangePasswordDocument,
    "mutation Disable2Fa {\n  disableTwoFactor\n}": types.Disable2FaDocument,
    "mutation Enable2Fa {\n  enableTwoFactor\n}": types.Enable2FaDocument,
    "mutation UpdateUserProfile($data: UserUpdateInput!) {\n  updateProfile(data: $data) {\n    id\n    fullName\n    isVerified\n    email\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}": types.UpdateUserProfileDocument,
    "query GetFullProfileAtUser {\n  getMe {\n    id\n    email\n    isVerified\n    isTwoFactorEnabled\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}": types.GetFullProfileAtUserDocument,
    "query GetMe {\n  getMe {\n    id\n    email\n    fullName\n    profile {\n      imageUrl\n    }\n  }\n}": types.GetMeDocument,
    "query GetAllRecipes($data: Float!) {\n  getAllRecipes(take: $data) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": types.GetAllRecipesDocument,
    "query GetByIdRecipe($id: String!) {\n  getRecipeById(id: $id) {\n    id\n    title\n    description\n    difficulty\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n    }\n    recipeIngredients {\n      id\n      quantity\n      unit\n    }\n  }\n}": types.GetByIdRecipeDocument,
    "query GetBySlugRecipe($slug: String!) {\n  getRecipeBySlug(slug: $slug) {\n    id\n    title\n    author {\n      profile {\n        imageUrl\n      }\n      email\n    }\n    description\n    difficulty\n    recipeIngredients {\n      id\n      ingredient {\n        iconUrl\n        title\n      }\n      quantity\n      unit\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n      proteins\n    }\n    tag {\n      name\n    }\n    imageUrl\n    likes {\n      id\n      userId\n    }\n    isLiked\n    views {\n      id\n      userId\n    }\n    comments {\n      id\n      author {\n        id\n        profile {\n          fullName\n          imageUrl\n        }\n      }\n      content\n      createdAt\n    }\n    cookingTime\n    recipeStep {\n      id\n      imageUrl\n      description\n      title\n      order\n    }\n    calories\n  }\n}": types.GetBySlugRecipeDocument,
    "query GetRecipeFilters {\n  getRecipeFilters {\n    difficulty\n    tag {\n      name\n    }\n  }\n}": types.GetRecipeFiltersDocument,
    "query GetLikedRecipes($take: Float!) {\n  getLikedRecipes(take: $take) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": types.GetLikedRecipesDocument,
    "query SearchRecipe($searchTerm: String!) {\n  searchRecipes(searchTerm: $searchTerm) {\n    id\n    imageUrl\n    title\n    description\n    calories\n    cookingTime\n    difficulty\n    slug\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": types.SearchRecipeDocument,
    "query SortRecipe($sortBy: SortByEnum!, $take: Float, $offset: Float) {\n  sortRecipes(take: $take, skip: $offset, sortBy: $sortBy) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}": types.SortRecipeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n    message\n  }\n}"): (typeof documents)["mutation Login($data: LoginInput!) {\n  login(data: $data) {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LogOut {\n  logout\n}"): (typeof documents)["mutation LogOut {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}"): (typeof documents)["mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RefreshTokens {\n  refresh {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n  }\n}"): (typeof documents)["mutation RefreshTokens {\n  refresh {\n    accessToken\n    user {\n      id\n      fullName\n      email\n      role\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    success\n    email\n  }\n}"): (typeof documents)["mutation Register($data: RegisterInput!) {\n  register(data: $data) {\n    success\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ResendVerificationEmail($data: String!) {\n  resendVerificationEmail(email: $data)\n}"): (typeof documents)["mutation ResendVerificationEmail($data: String!) {\n  resendVerificationEmail(email: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ResetPassword($data: RecoveryInput!) {\n  resetPassword(data: $data)\n}"): (typeof documents)["mutation ResetPassword($data: RecoveryInput!) {\n  resetPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Verify($data: ConfirmationInput!) {\n  verifyEmail(data: $data)\n}"): (typeof documents)["mutation Verify($data: ConfirmationInput!) {\n  verifyEmail(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateComment($input: CreateCommentInput!) {\n  createComment(input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateComment($input: CreateCommentInput!) {\n  createComment(input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteComment($id: String!) {\n  deleteComment(id: $id)\n}"): (typeof documents)["mutation DeleteComment($id: String!) {\n  deleteComment(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation EditComment($id: String!, $input: EditCommentInput!) {\n  editComment(id: $id, input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation EditComment($id: String!, $input: EditCommentInput!) {\n  editComment(id: $id, input: $input) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllCommentsFromRecipe($recipeId: String!) {\n  getAllCommentsFromRecipe(recipeId: $recipeId) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetAllCommentsFromRecipe($recipeId: String!) {\n  getAllCommentsFromRecipe(recipeId: $recipeId) {\n    id\n    authorId\n    author {\n      id\n      profile {\n        fullName\n        imageUrl\n      }\n    }\n    recipeId\n    content\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ToggleLike($recipeId: String!) {\n  toggleLike(recipeId: $recipeId) {\n    isLiked\n  }\n}"): (typeof documents)["mutation ToggleLike($recipeId: String!) {\n  toggleLike(recipeId: $recipeId) {\n    isLiked\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}"): (typeof documents)["mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}"): (typeof documents)["mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Disable2Fa {\n  disableTwoFactor\n}"): (typeof documents)["mutation Disable2Fa {\n  disableTwoFactor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Enable2Fa {\n  enableTwoFactor\n}"): (typeof documents)["mutation Enable2Fa {\n  enableTwoFactor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUserProfile($data: UserUpdateInput!) {\n  updateProfile(data: $data) {\n    id\n    fullName\n    isVerified\n    email\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}"): (typeof documents)["mutation UpdateUserProfile($data: UserUpdateInput!) {\n  updateProfile(data: $data) {\n    id\n    fullName\n    isVerified\n    email\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetFullProfileAtUser {\n  getMe {\n    id\n    email\n    isVerified\n    isTwoFactorEnabled\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}"): (typeof documents)["query GetFullProfileAtUser {\n  getMe {\n    id\n    email\n    isVerified\n    isTwoFactorEnabled\n    profile {\n      fullName\n      age\n      bio\n      gender\n      sites\n      imageUrl\n    }\n    measurements {\n      weightKg\n      goalWeightKg\n      armCm\n      chestCm\n      heightCm\n      thighCm\n      waistCm\n      nutritionalGoal\n      activityLevel\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMe {\n  getMe {\n    id\n    email\n    fullName\n    profile {\n      imageUrl\n    }\n  }\n}"): (typeof documents)["query GetMe {\n  getMe {\n    id\n    email\n    fullName\n    profile {\n      imageUrl\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllRecipes($data: Float!) {\n  getAllRecipes(take: $data) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"): (typeof documents)["query GetAllRecipes($data: Float!) {\n  getAllRecipes(take: $data) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetByIdRecipe($id: String!) {\n  getRecipeById(id: $id) {\n    id\n    title\n    description\n    difficulty\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n    }\n    recipeIngredients {\n      id\n      quantity\n      unit\n    }\n  }\n}"): (typeof documents)["query GetByIdRecipe($id: String!) {\n  getRecipeById(id: $id) {\n    id\n    title\n    description\n    difficulty\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n    }\n    recipeIngredients {\n      id\n      quantity\n      unit\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetBySlugRecipe($slug: String!) {\n  getRecipeBySlug(slug: $slug) {\n    id\n    title\n    author {\n      profile {\n        imageUrl\n      }\n      email\n    }\n    description\n    difficulty\n    recipeIngredients {\n      id\n      ingredient {\n        iconUrl\n        title\n      }\n      quantity\n      unit\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n      proteins\n    }\n    tag {\n      name\n    }\n    imageUrl\n    likes {\n      id\n      userId\n    }\n    isLiked\n    views {\n      id\n      userId\n    }\n    comments {\n      id\n      author {\n        id\n        profile {\n          fullName\n          imageUrl\n        }\n      }\n      content\n      createdAt\n    }\n    cookingTime\n    recipeStep {\n      id\n      imageUrl\n      description\n      title\n      order\n    }\n    calories\n  }\n}"): (typeof documents)["query GetBySlugRecipe($slug: String!) {\n  getRecipeBySlug(slug: $slug) {\n    id\n    title\n    author {\n      profile {\n        imageUrl\n      }\n      email\n    }\n    description\n    difficulty\n    recipeIngredients {\n      id\n      ingredient {\n        iconUrl\n        title\n      }\n      quantity\n      unit\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      fiber\n      proteins\n    }\n    tag {\n      name\n    }\n    imageUrl\n    likes {\n      id\n      userId\n    }\n    isLiked\n    views {\n      id\n      userId\n    }\n    comments {\n      id\n      author {\n        id\n        profile {\n          fullName\n          imageUrl\n        }\n      }\n      content\n      createdAt\n    }\n    cookingTime\n    recipeStep {\n      id\n      imageUrl\n      description\n      title\n      order\n    }\n    calories\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRecipeFilters {\n  getRecipeFilters {\n    difficulty\n    tag {\n      name\n    }\n  }\n}"): (typeof documents)["query GetRecipeFilters {\n  getRecipeFilters {\n    difficulty\n    tag {\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLikedRecipes($take: Float!) {\n  getLikedRecipes(take: $take) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"): (typeof documents)["query GetLikedRecipes($take: Float!) {\n  getLikedRecipes(take: $take) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchRecipe($searchTerm: String!) {\n  searchRecipes(searchTerm: $searchTerm) {\n    id\n    imageUrl\n    title\n    description\n    calories\n    cookingTime\n    difficulty\n    slug\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"): (typeof documents)["query SearchRecipe($searchTerm: String!) {\n  searchRecipes(searchTerm: $searchTerm) {\n    id\n    imageUrl\n    title\n    description\n    calories\n    cookingTime\n    difficulty\n    slug\n    likes {\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SortRecipe($sortBy: SortByEnum!, $take: Float, $offset: Float) {\n  sortRecipes(take: $take, skip: $offset, sortBy: $sortBy) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"): (typeof documents)["query SortRecipe($sortBy: SortByEnum!, $take: Float, $offset: Float) {\n  sortRecipes(take: $take, skip: $offset, sortBy: $sortBy) {\n    id\n    title\n    slug\n    description\n    imageUrl\n    calories\n    cookingTime\n    difficulty\n    likes {\n      id\n      userId\n    }\n    views {\n      id\n      userId\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;