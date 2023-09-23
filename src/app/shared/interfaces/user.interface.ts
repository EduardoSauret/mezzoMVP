export interface UserProfile {
	uid?: string;  // Firebase UID
	email?: string;
  username?: string;
  bio?: string;
	profileType?: string;
  artist?: string[];  // Array of artist data
  creative?: string[];  // Array of creative data
  influencer?: string[];  // Array of influencer data
}