// import {
//   Account,
//   Avatars,
//   Client,
//   Databases,
//   ID,
//   Query,
//   Storage,
// } from "react-native-appwrite";
// import Constants from "expo-constants";

// // 🔹 Load environment variables safely
// const endpoint =
//   Constants.expoConfig?.extra?.endpoint ||
//   process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
// const projectId =
//   Constants.expoConfig?.extra?.projectId ||
//   process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
// export const databaseId =
//   Constants.expoConfig?.extra?.databaseId ||
//   process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
// export const userCollectionId =
//   Constants.expoConfig?.extra?.userCollectionId ||
//   process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID;

// // 🔹 Initialize Appwrite client
// const client = new Client();
// client.setEndpoint(endpoint).setProject(projectId);

// // 🔹 Create service instances
// export const avatars = new Avatars(client);
// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);

// /**
//  * 🔹 Create a new user account and store in the database
//  */
// export const createUser = async (email, password, name, prn) => {
//   try {
//     // Ensure parameters exist
//     if (!email || !password || !name || !prn) throw new Error("Missing fields");

//     // Create Appwrite account
//     const newAccount = await account.create(ID.unique(), email, password, name);
//     if (!newAccount) throw new Error("Account creation failed");

//     // Generate avatar URL
//     const avatarUrl = avatars.getInitials(name || "Anonymous");

//     // Store user details in the database
//     await databases.createDocument(databaseId, userCollectionId, ID.unique(), {
//       accountId: newAccount.$id,
//       email,
//       username: name,
//       collegeprn: prn,
//       avatar: avatarUrl,
//       isAdmin: false,
//     });

//     // Sign in the user automatically
//     return await signIn(email, password);
//   } catch (error) {
//     console.error("Error in createUser:", error);
//     throw new Error(error.message);
//   }
// };

// /**
//  * 🔹 Sign in an existing user
//  */
// export const signIn = async (email, password) => {
//   try {
//     if (!email || !password) throw new Error("Email and password required");

//     // Create session
//     return await account.createEmailPasswordSession(email, password);
//   } catch (error) {
//     console.error("Error in signIn:", error);
//     throw new Error(error.message);
//   }
// };

// /**
//  * 🔹 Get the currently logged-in user
//  */
// export async function getCurrentUser() {
//   try {
//     const currentAccount = await account.get(); // Assuming account is the correct object to get user details
//     if (!currentAccount) return null;

//     const currentUser = await databases.listDocuments(
//       databaseId,
//       userCollectionId,
//       [Query.equal("accountId", currentAccount.$id)] // Ensure 'accountId' is the correct field name
//     );

//     // console.log(currentUser); // Log the result to check if you're getting the expected data

//     if (!currentUser || currentUser.documents.length === 0) return null;

//     return currentUser.documents[0];
//   } catch (error) {
//     console.error(error); // Log any errors
//     return null;
//   }
// }

// /**
//  * 🔹 Logout the current user
//  */
// /**
//  * 🔹 Logout the current user
//  */
// /**
//  * 🔹 Logout the current user
//  */
// export const logout = async () => {
//   try {
//     // Check if the user is logged in
//     const currentUser = await account.get();
//     if (!currentUser) {
//       console.log("No user logged in");
//       return; // Exit if no user is logged in
//     }

//     // Proceed with logout
//     await account.deleteSession("current");
//     console.log("User logged out successfully");
//   } catch (error) {
//     console.error("Error logging out:", error);
//     // Provide specific handling for missing permissions
//     if (error.message.includes("missing scope")) {
//       console.log("User lacks the necessary permissions for logout.");
//     }
//   }
// };
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";
import Constants from "expo-constants";

// 🔹 Load environment variables safely
const endpoint =
  Constants.expoConfig?.extra?.endpoint ||
  process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const projectId =
  Constants.expoConfig?.extra?.projectId ||
  process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
export const databaseId =
  Constants.expoConfig?.extra?.databaseId ||
  process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
export const userCollectionId =
  Constants.expoConfig?.extra?.userCollectionId ||
  process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID;
export const eventCollectionId =
  Constants.expoConfig?.extra?.eventCollectionId ||
  process.env.EXPO_PUBLIC_APPWRITE_EVENT_COLLECTION_ID;
export const bucketId =
  Constants.expoConfig?.extra?.bucketId ||
  process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID; // New collection for events

// 🔹 Initialize Appwrite client
const client = new Client();
client.setEndpoint(endpoint).setProject(projectId);

// 🔹 Create service instances
export const avatars = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

/**
 * 🔹 Create a new user account and store in the database
 */
export const createUser = async (email, password, name, prn) => {
  try {
    // Ensure parameters exist
    if (!email || !password || !name || !prn) throw new Error("Missing fields");

    // Create Appwrite account
    const newAccount = await account.create(ID.unique(), email, password, name);
    if (!newAccount) throw new Error("Account creation failed");

    // Generate avatar URL
    const avatarUrl = avatars.getInitials(name || "Anonymous");

    // Store user details in the database
    await databases.createDocument(databaseId, userCollectionId, ID.unique(), {
      accountId: newAccount.$id,
      email,
      username: name,
      collegeprn: prn,
      avatar: avatarUrl,
      isAdmin: false,
    });

    // Sign in the user automatically
    return await signIn(email, password);
  } catch (error) {
    console.error("Error in createUser:", error);
    throw new Error(error.message);
  }
};

/**
 * 🔹 Sign in an existing user
 */
export const signIn = async (email, password) => {
  try {
    if (!email || !password) throw new Error("Email and password required");

    // Create session
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.error("Error in signIn:", error);
    throw new Error(error.message);
  }
};

/**
 * 🔹 Get the currently logged-in user
 */
export async function getCurrentUser() {
  try {
    const currentAccount = await account.get(); // Assuming account is the correct object to get user details
    if (!currentAccount) return null;

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)] // Ensure 'accountId' is the correct field name
    );

    if (!currentUser || currentUser.documents.length === 0) return null;

    return currentUser.documents[0];
  } catch (error) {
    console.error(error); // Log any errors
    return null;
  }
}

/**
 * 🔹 Logout the current user
 */
export const logout = async () => {
  try {
    // Check if the user is logged in
    const currentUser = await account.get();
    if (!currentUser) {
      console.log("No user logged in");
      return; // Exit if no user is logged in
    }

    // Proceed with logout
    await account.deleteSession("current");
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

/**
 * 🔹 Create a new event and store it in the database
 */
export const uploadPoster = async (posterUri) => {
  try {
    if (!posterUri) throw new Error("Invalid posterUri");

    const response = await storage.createFile(bucketId, ID.unique(), {
      uri: posterUri,
      type: "image/jpeg",
    });

    if (!response || !response.$id) {
      throw new Error("Invalid response from storage.createFile");
    }

    console.log("Poster uploaded:", response.$id);
    return response.$id;
  } catch (error) {
    console.error("Error uploading poster:", error.message);
    throw new Error("Failed to upload poster.");
  }
};

// Function to create an event in Appwrite database
export const createEvent = async (eventDetails) => {
  try {
    // Ensure all fields are present
    const { eventName, clubName, date, time, venue, posterId } = eventDetails;
    if (!eventName || !clubName || !date || !time || !venue || !posterId) {
      throw new Error("Missing required fields.");
    }

    await databases.createDocument(databaseId, eventCollectionId, ID.unique(), {
      eventName,
      clubName,
      date,
      time,
      venue,
      posterUrl: posterId, // Store file ID from storage
    });

    console.log("Event created successfully!");
  } catch (error) {
    console.error("Error creating event:", error);
    throw new Error("Failed to create event.");
  }
};
/**
 * 🔹 Fetch events from the database
 */
export const fetchEvents = async () => {
  try {
    const events = await databases.listDocuments(databaseId, eventCollectionId);

    return events.documents;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error(error.message);
  }
};
