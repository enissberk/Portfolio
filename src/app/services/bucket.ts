import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://asset-test-9ec1c.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface Comment{
  _id?: string;
  username?: string;
  title?: string;
  message?: string;
  rating?: number;
  date?: Date | string;
}
export namespace comment {
  const BUCKET_ID = '618393ae4e0014002d14677a';
    export function get (...args: getArgs) {
      return Bucket.data.get<Comment & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Comment & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Comment, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Comment & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Comment> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Comment & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Comment & id>(BUCKET_ID, ...args);
      };
  }
}

export interface About_Company{
  _id?: string;
  name?: string;
  mail?: string;
  phone?: string;
  location?: { type: "Point", coordinates: [number,number]};
  presentation?: string;
  images?: string[];
  social_medias?: {
  name?: string;
  url?: string;}[];
  facts?: {
  name?: string;
  count?: number;}[];
  partners?: {
  logo?: string;
  name?: string;}[];
}
export namespace about_company {
  const BUCKET_ID = '618393af4e0014002d14677d';
    export function get (...args: getArgs) {
      return Bucket.data.get<About_Company & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<About_Company & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<About_Company, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: About_Company & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<About_Company> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<About_Company & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<About_Company & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Company_Team{
  _id?: string;
  profile_picture?: string;
  name?: string;
  position?: string;
}
export namespace company_team {
  const BUCKET_ID = '618393af4e0014002d146780';
    export function get (...args: getArgs) {
      return Bucket.data.get<Company_Team & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Company_Team & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Company_Team, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Company_Team & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Company_Team> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Company_Team & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Company_Team & id>(BUCKET_ID, ...args);
      };
  }
}

export interface About_Me{
  _id?: string;
  name?: string;
  surname?: string;
  mail?: string;
  birthday?: Date | string;
  jobs?: string[];
  phone?: string;
  skills?: {
  name?: string;
  percent?: number;}[];
  bio?: string;
  images?: string[];
  location?: { type: "Point", coordinates: [number,number]};
  facts?: {
  name?: string;
  count?: number;}[];
  resume?: {
  category?: string;
  resume_in?: {
  position?: string;
  description?: string;
  years?: string;}[];}[];
}
export namespace about_me {
  const BUCKET_ID = '618393b04e0014002d146783';
    export function get (...args: getArgs) {
      return Bucket.data.get<About_Me & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<About_Me & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<About_Me, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: About_Me & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<About_Me> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<About_Me & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<About_Me & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Service{
  _id?: string;
  image?: string;
  name?: string;
  description?: string;
  features?: {
  image?: string;
  title?: string;
  description?: string;}[];
}
export namespace service {
  const BUCKET_ID = '618393b04e0014002d146786';
    export function get (...args: getArgs) {
      return Bucket.data.get<Service & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Service & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Service, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Service & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Service> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Service & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Service & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Portfolio{
  _id?: string;
  images?: string[];
  name?: string;
  url?: string;
  date?: Date | string;
}
export namespace portfolio {
  const BUCKET_ID = '618393ae4e0014002d146778';
    export function get (...args: getArgs) {
      return Bucket.data.get<Portfolio & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Portfolio & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Portfolio, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Portfolio & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Portfolio> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Portfolio & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Portfolio & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Blog{
  _id?: string;
  images?: string[];
  title?: string;
  content?: string;
  date?: Date | string;
}
export namespace blog {
  const BUCKET_ID = '618393b14e0014002d14678b';
    export function get (...args: getArgs) {
      return Bucket.data.get<Blog & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Blog & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Blog, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Blog & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Blog> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Blog & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Blog & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Reference{
  _id?: string;
  profile_picture?: string;
  name?: string;
  message?: string;
  company?: string;
  position?: string;
}
export namespace reference {
  const BUCKET_ID = '618393b24e0014002d14678f';
    export function get (...args: getArgs) {
      return Bucket.data.get<Reference & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Reference & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Reference, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Reference & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Reference> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Reference & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Reference & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Contact{
  _id?: string;
  name?: string;
  mail?: string;
  phone?: string;
  message?: string;
  date?: Date | string;
  answer?: string;
}
export namespace contact {
  const BUCKET_ID = '618393b34e0014002d146791';
    export function get (...args: getArgs) {
      return Bucket.data.get<Contact & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Contact & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Contact, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Contact & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Contact> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Contact & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Contact & id>(BUCKET_ID, ...args);
      };
  }
}