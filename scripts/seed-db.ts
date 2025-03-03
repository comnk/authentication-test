import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const db = new Database("./sqlite.db");

try {
  const sqlFilePath = path.join(__dirname, "../better-auth_migrations/user_database.sql");

  console.log(`📂 Loading SQL file from: ${sqlFilePath}`);

  if (!fs.existsSync(sqlFilePath)) {
    throw new Error(`🚨 SQL file not found at path: ${sqlFilePath}`);
  }

  const sqlContent = fs.readFileSync(sqlFilePath, "utf-8");
  const statements = sqlContent.split(";").filter(statement => statement.trim());

  console.log(`📜 Found ${statements.length} SQL statements to execute`);

  statements.forEach(statement => {
    try {
      db.exec(statement);
      console.log(`✅ Executed: ${statement.trim().slice(0, 50)}...`);
    } catch (err) {
      console.error(`❌ Error executing statement: ${statement}`, err);
    }
  });

  console.log("✅ Database tables created successfully");
} catch (error) {
  console.error("❌ Error seeding database:", error);
} finally {
  db.close();
}
