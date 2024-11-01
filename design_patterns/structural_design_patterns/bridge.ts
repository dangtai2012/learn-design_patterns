interface IDatabase {
  connect(): void;
  query(sql: string): any;
  close(): void;
}

class PostgreSQLDatabase implements IDatabase {
  connect(): void {
    console.log("Connecting to PostgreSQL database.");
  }

  query(sql: string): any {
    console.log(`Executing query '${sql}' on PostgreSQL database.`);
    // Implementation of query execution
  }

  close(): void {
    console.log("Closing connection to PostgreSQL database.");
  }
}

class MongoDBDatabase implements IDatabase {
  connect(): void {
    console.log("Connecting to MongoDB database.");
  }

  query(sql: string): any {
    console.log(`Executing query '${sql}' on MongoDB database.`);
    // Implementation of query execution
  }

  close(): void {
    console.log("Closing connection to MongoDB database.");
  }
}

abstract class DatabaseService {
  constructor(protected database: IDatabase) {}

  abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService {
  fetchData(query: string): any {
    this.database.connect();
    const result = this.database.query(query);
    this.database.close();
    return result;
  }
}

const databaseService = new ClientDatabaseService(new PostgreSQLDatabase());
databaseService.fetchData("SELECT * FROM users");
