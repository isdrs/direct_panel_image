export class User {
    id: number;
    phone: string;
    fullName: string;
    avatar: string;
    type : User.Type;
    nationalCode: string;
    email: string;
    jobTitle: string;
    jobType: User.JobType;
    telegramLink: string;
    websiteLink: string;
    instagramLink: string;
    password: string;
    credit: number;
    status: User.UserStatus;
    userStatus : User.UserStatus;
    settingStatus: User.SettingStatus;
    registerAt: number;
    birthDate: number;
    // device: User.;
    address: string;
    zipCode: string;
    // marketer: ;
}

export namespace User {

    export enum Type {

        Admin = 2, System = 1
    }

    export enum JobType {
        none = 1, coffeeShop, resturant
    }
     
    export enum UserStatus {
        notRegistered = 1, registered = 3, suspend
    }

    export enum SettingStatus {
        notSet = 1, socialSet = 10, WelcomeSet = 20, voteSet = 30, loyaltySet = 40, skipped = 100
    }
    
}