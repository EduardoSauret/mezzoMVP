export interface UserProfile {
	uid?: string;  // Firebase UID
	email?: string;
  username?: string;
  bio?: string;
	profileType?: string;
	profileSubTypes?: string[];
  artist?: string[];  // Array of artist data
  creator?: string[];  // Array of creative data
  influencer?: string[];  // Array of influencer data
}