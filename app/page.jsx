export default function StarterHomeLedgerLandingPage() {
  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };

  const buttonPrimary = {
    display: "inline-block",
    background: "#1c1917",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontSize: "14px",
    fontWeight: 600,
    marginRight: "12px",
  };

  const buttonSecondary = {
    display: "inline-block",
    background: "#ffffff",
    color: "#1c1917",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontSize: "14px",
    fontWeight: 600,
    border: "1px solid #d6d3d1",
  };

  const postBox = {
    background: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: "18px",
    padding: "16px 18px",
    fontSize: "15px",
    fontWeight: 500,
  };

  return (
    <div>
      <header style={{ borderBottom: "1px solid #e7e5e4", background: "rgba(255,255,255,0.95)" }}>
        <div
          style={{
            ...sectionStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "18px",
            paddingBottom: "18px",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#78716c" }}>
              The Starter Home Ledger
            </div>
            <div style={{ fontSize: "14px", color: "#57534e", marginTop: "6px" }}>
              What it takes to actually build entry-level homes today.
            </div>
          </div>
          <a href="#subscribe" style={buttonSecondary}>Subscribe</a>
        </div>
      </header>

      <main>
        <section style={{ ...sectionStyle, paddingTop: "72px", paddingBottom: "72px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px" }}>
          <div>
            <div style={{ display: "inline-block", border: "1px solid #d6d3d1", borderRadius: "999px", padding: "8px 12px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#57534e" }}>
              Developer-first housing publication
            </div>

            <h1 style={{ fontSize: "56px", lineHeight: 1.05, marginTop: "20px", marginBottom: "0", color: "#1c1917" }}>
              Real numbers. Real constraints. What actually pencils.
            </h1>

            <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#44403c", maxWidth: "680px", marginTop: "24px" }}>
              A practical publication for small developers, builders, and infill operators focused on
              starter homes that can actually be built, financed, and repeated.
            </p>

            <div style={{ marginTop: "32px" }}>
              <a href="#subscribe" style={buttonPrimary}>Subscribe for free</a>
              <a href="#posts" style={buttonSecondary}>Read sample topics</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", maxWidth: "650px", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #e7e5e4" }}>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 700 }}>900–1,200</div>
                <div style={{ fontSize: "14px", color: "#57534e", marginTop: "6px" }}>square feet target</div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 700 }}>1–20</div>
                <div style={{ fontSize: "14px", color: "#57534e", marginTop: "6px" }}>unit developer lens</div>
              </div>
              <div>
                <div style={{ fontSize: "30px", fontWeight: 700 }}>0</div>
                <div style={{ fontSize: "14px", color: "#57534e", marginTop: "6px" }}>fluff tolerance</div>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "22px", padding: "24px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#78716c" }}>
                Featured post
              </div>
              <h2 style={{ fontSize: "32px", lineHeight: 1.15, marginTop: "14px", marginBottom: "0" }}>
                What a Starter Home Means for a Developer
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#44403c", marginTop: "18px" }}>
                A starter home is not defined by price alone. It is defined by what can be built,
                sold, and financed at the entry point of a given market — under real zoning, real
                cost pressure, and real lender constraints.
              </p>

              <div style={{ marginTop: "22px", display: "grid", gap: "12px" }}>
                <div style={{ background: "#ffffff", borderRadius: "16px", padding: "14px 16px" }}>• Why starter homes disappeared</div>
                <div style={{ background: "#ffffff", borderRadius: "16px", padding: "14px 16px" }}>• The hard cost ceiling you cannot cross</div>
                <div style={{ background: "#ffffff", borderRadius: "16px", padding: "14px 16px" }}>• Why zoning kills deals before financing ever does</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "#ffffff", borderTop: "1px solid #e7e5e4", borderBottom: "1px solid #e7e5e4" }}>
          <div style={{ ...sectionStyle, paddingTop: "64px", paddingBottom: "64px" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#78716c" }}>
                What you get
              </div>
              <h2 style={{ fontSize: "42px", lineHeight: 1.15, marginTop: "14px", marginBottom: "0" }}>
                Practical analysis for people risking real capital.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "36px" }}>
              <div style={cardStyle}>
                <h3 style={{ margin: 0, fontSize: "22px" }}>Deal anatomy</h3>
                <p style={{ marginTop: "14px", marginBottom: 0, fontSize: "15px", lineHeight: 1.8, color: "#44403c" }}>
                  Breakdowns of site yield, zoning envelope, fee pressure, pricing limits, and where
                  starter-home deals actually fail.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={{ margin: 0, fontSize: "22px" }}>Product that pencils</h3>
                <p style={{ marginTop: "14px", marginBottom: 0, fontSize: "15px", lineHeight: 1.8, color: "#44403c" }}>
                  Simple forms, boring plans, efficient layouts, and the product decisions that help
                  small homes survive real-world cost constraints.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={{ margin: 0, fontSize: "22px" }}>Process reality</h3>
                <p style={{ marginTop: "14px", marginBottom: 0, fontSize: "15px", lineHeight: 1.8, color: "#44403c" }}>
                  Entitlement risk, timing drag, utility surprises, and the parts of development that
                  usually get ignored until they blow up a project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="posts" style={{ ...sectionStyle, paddingTop: "72px", paddingBottom: "72px" }}>
          <div style={{ maxWidth: "720px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#78716c" }}>
              Sample topics
            </div>
            <h2 style={{ fontSize: "42px", lineHeight: 1.15, marginTop: "14px", marginBottom: "0" }}>
              The kind of posts subscribers can expect.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginTop: "34px" }}>
            {[
              "What a Starter Home Means for a Developer",
              "The Hard Cost Ceiling You Cannot Cross",
              "Why Zoning Kills Starter Homes Before Financing Ever Does",
              "The Simplest Product That Still Sells",
              "A Starter Home Deal That Almost Worked",
              "Why Repetition Matters More Than Design",
            ].map((title) => (
              <div key={title} style={postBox}>
                {title}
              </div>
            ))}
          </div>
        </section>

        <section id="subscribe" style={{ background: "#1c1917", color: "#fafaf9" }}>
          <div style={{ ...sectionStyle, maxWidth: "900px", textAlign: "center", paddingTop: "80px", paddingBottom: "80px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d6d3d1" }}>
              Subscribe
            </div>
            <h2 style={{ fontSize: "48px", lineHeight: 1.1, marginTop: "14px", marginBottom: "0" }}>
              Follow the math behind entry-level housing.
            </h2>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#d6d3d1", maxWidth: "700px", margin: "20px auto 0" }}>
              For developers, builders, and operators who want straight analysis on what it takes to
              build starter homes that can actually work.
            </p>

            <div style={{ marginTop: "28px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  border: "1px solid #57534e",
                  background: "#292524",
                  color: "#ffffff",
                  fontSize: "14px",
                  marginRight: "10px",
                }}
              />
              <button
                type="button"
                style={{
                  padding: "14px 20px",
                  borderRadius: "16px",
                  border: "none",
                  background: "#ffffff",
                  color: "#1c1917",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Subscribe free
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
