const aerodromeData = {
    adelaide: `
      <h2>Adelaide (YPAD)</h2>
      <section>
        <h3>Positions</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Callsign</th>
              <th>Frequency</th>
              <th>Login ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adelaide ADC</td>
              <td>Adelaide Tower</td>
              <td>120.500</td>
              <td>AD_TWR</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    amberley: `<h2>Amberley (YAMB)</h2><p>Amberley details coming soon...</p>`,
    brisbane: `<h2>Brisbane (YBBN)</h2><p>Brisbane details coming soon...</p>`,
    cairns: `<h2>Cairns (YBCS)</h2><p>Cairns details coming soon...</p>`,
    canberra: `<h2>Canberra (YSCB)</h2><p>Canberra details coming soon...</p>`,
    sydney: `
      <h2>Sydney (YSSY)</h2>
      <section>
        <h3>Positions</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Callsign</th>
              <th>Frequency</th>
              <th>Login ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sydney ADC</td>
              <td>Sydney Tower</td>
              <td>120.500</td>
              <td>SY_TWR</td>
            </tr>
            <tr>
              <td>Sydney ACD</td>
              <td>Sydney Delivery</td>
              <td>133.800</td>
              <td>SY_DEL</td>
            </tr>
          </tbody>
        </table>
      </section>
    `
  };

  // Event listener for sidebar links
  document.querySelectorAll('aside ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const contentKey = event.target.getAttribute('data-content');
      const mainContent = document.getElementById('mainContent');
      mainContent.innerHTML = aerodromeData[contentKey] || `<h2>Content not available</h2>`;
    });
  });