export function App() {
  return (
    <div className="pages-container">
      {/* Page 1: Title & Introduction */}
      <div className="page">
        <h1 className="title-main">Chapter 2: Structure & Physiography</h1>
        <p style={{ textAlign: 'right', color: '#7f8c8d', fontFamily: 'Patrick Hand' }}>
          Class 11 Geography (NCERT)
        </p>

        <div className="sketch-box">
          <h3 className="subsection-title">INTRODUCTION: EARTH & PLATES</h3>
          <ul>
            <li><strong>Earth's Age:</strong> ~ <span className="highlight-yellow">4600 Million Years</span></li>
            <li><strong>Forces:</strong> <span style={{ color: '#c0392b' }}>Endogenic</span> (Internal) & <span style={{ color: '#3498db' }}>Exogenic</span> (External)</li>
            <li>
              <strong>Plate Tectonics:</strong><br />
              Indian Plate (South of Equator) <span className="arrow-flow">→</span> Broke from Australia <span className="arrow-flow">→</span> Moved North <span className="arrow-flow">→</span> Collided with Eurasian Plate <span className="arrow-flow">→</span> <strong className="highlight-pink">Himalayas Formed!</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Page 2: Part 1 - Geological Divisions */}
      <div className="page">
        <h2 className="section-title">PART 1: GEOLOGICAL DIVISIONS</h2>
        <p><em>(Based on rock formation history)</em></p>

        <div className="geo-block">
          <h4 className="sub-heading">1. Peninsular Block</h4>
          <ul>
            <li><strong>Nature:</strong> Rigid, Stable, Ancient</li>
            <li><strong>Composition:</strong> Gneisses & Granites (since <span className="highlight-yellow">Cambrian period</span>)</li>
            <li><strong>Boundary:</strong> Kachchh → Aravali → Delhi → Yamuna/Ganga parallel → Rajmahal Hills → Ganga Delta</li>
            <li><strong>Extensions:</strong> Karbi Anglong & Meghalaya (NE) and Rajasthan (West)</li>
            <li><strong>Separation:</strong> <span className="highlight-pink">Malda Fault</span> separates NE plateau from Chotanagpur (West Bengal)</li>
            <li><strong>Activity:</strong> Mostly stable vertical movements (block faulting)</li>
            <li><strong>Rift Valleys:</strong> <span className="river-text">Narmada</span>, <span className="river-text">Tapi</span>, <span className="river-text">Mahanadi</span> are evidence</li>
          </ul>
        </div>

        <div className="geo-block">
          <h4 className="sub-heading">2. Himalayas and other Peninsular Mountains</h4>
          <ul>
            <li><strong>Nature:</strong> Young, Weak, Flexible</li>
            <li><strong>Origin:</strong> Tectonic in origin</li>
            <li><strong>Features:</strong> Still undergoing changes (folding/faulting)</li>
            <li>Rich in gorges, V-shaped valleys, rapids, waterfalls (Youthful stage of rivers)</li>
          </ul>
        </div>

        <div className="geo-block">
          <h4 className="sub-heading">3. Indo-Ganga-Brahmaputra Plain</h4>
          <ul>
            <li><strong>Origin:</strong> <span className="highlight-green">Geo-synclinal depression</span> formed during 3rd phase of Himalayan formation (~64 million years ago)</li>
            <li><strong>Filling:</strong> Sediments from Himalayan & Peninsular rivers</li>
            <li><strong>Depth:</strong> Average depth of alluvial deposits is <span className="highlight-yellow">1,000–2,000 meters</span></li>
          </ul>
        </div>
      </div>

      {/* Page 3: Part 2 - Physiographic Divisions Intro & Himalayas */}
      <div className="page">
        <h2 className="section-title">PART 2: PHYSIOGRAPHIC DIVISIONS</h2>
        <p><em>(Based on relief and physical features – <strong>6 Divisions</strong>)</em></p>

        <div className="sketch-box" style={{ borderColor: '#8e44ad' }}>
          <h3 className="subsection-title">1. The North & NE Mountains (HIMALAYAS)</h3>
          <p>Series of parallel ranges: <span className="highlight-pink">Greater Himalayas</span>, <span className="highlight-green">Lesser Himalayas</span>, <span className="highlight-yellow">Shiwalik</span></p>
          <p><strong>Length:</strong> ~2,500 km (E-W). <strong>Width:</strong> 400km (West) → 160km (East)</p>

          <h4 className="sub-heading" style={{ background: 'var(--highlighter-green)', display: 'inline-block', padding: '2px 10px' }}>
            Orientation:
          </h4>
          <ul>
            <li><strong>Northwest:</strong> NW to SE direction</li>
            <li><strong>Darjeeling/Sikkim:</strong> East-West direction</li>
            <li><strong>Arunachal:</strong> SW to NE direction</li>
            <li><strong>Nagaland/Manipur:</strong> North-South direction</li>
          </ul>
        </div>
      </div>

      {/* Page 4: Regional Sub-divisions A & B */}
      <div className="page">
        <h4 className="sub-heading" style={{ background: 'var(--highlighter-green)', display: 'inline-block', padding: '2px 10px' }}>
          Regional Sub-divisions of Himalayas:
        </h4>

        <div className="geo-block" style={{ marginTop: '20px' }}>
          <h4 className="sub-heading">A. Kashmir or Northwestern Himalayas</h4>
          <ul>
            <li><strong>Ranges:</strong> Karakoram, Ladakh, Zaskar, Pir Panjal</li>
            <li><strong>Cold Desert:</strong> Located in the North-eastern part (Ladakh)</li>
            <li><strong>Karewas:</strong> Thick deposits of glacial clay used for <span className="highlight-pink">Saffron (Zafran)</span> cultivation</li>
            <li><strong>Passes:</strong> Zoji La (Great Himalayas), Banihal (Pir Panjal), Photu La (Zaskar), Khardung La (Ladakh)</li>
            <li><strong>Lakes:</strong> Freshwater – Dal, Wular | Saltwater – Pangong Tso, Tso Moriri</li>
            <li><strong>Drainage:</strong> <span className="river-text">Indus</span>, <span className="river-text">Jhelum</span>, <span className="river-text">Chenab</span></li>
          </ul>
        </div>

        <div className="geo-block">
          <h4 className="sub-heading">B. Himachal and Uttarakhand Himalayas</h4>
          <ul>
            <li><strong>Location:</strong> Between Ravi (West) and Kali (East) rivers</li>
            <li><strong>Rivers:</strong> Indus system (Ravi, Beas, Satluj) & Ganga system (Yamuna, Ghaghara)</li>
            <li><strong>Ranges:</strong> Great Himalaya, Lesser Himalaya (locally called <span className="highlight-yellow">Dhaoladhar</span> in HP and <span className="highlight-yellow">Nag Tibba</span> in Uttarakhand), and Shiwalik</li>
            <li><strong>'Duns':</strong> Longitudinal valleys between Lesser Himalayas & Shiwalik (e.g., <span className="highlight-pink">Dehradun</span> – largest, Chandigarh-Kalka dun)</li>
            <li><strong>Tribes:</strong> Bhotias (nomadic, migrate to 'Bugyals' – summer grasslands)</li>
            <li><strong>Pilgrimage:</strong> Gangotri, Yamunotri, Kedarnath, Badrinath, Hemkund Sahib, "Valley of Flowers"</li>
          </ul>
        </div>
      </div>

      {/* Page 5: Regional Sub-divisions C & D */}
      <div className="page">
        <div className="geo-block">
          <h4 className="sub-heading">C. Darjeeling and Sikkim Himalayas</h4>
          <ul>
            <li><strong>Features:</strong> Fast-flowing rivers (<span className="river-text">Tista</span>), high peaks (<span className="highlight-pink">Kanchenjunga</span>), deep valleys</li>
            <li><strong>Tribes:</strong> Lepcha</li>
            <li><strong>Tea Gardens:</strong> Physical conditions are perfect for tea – moderate slope, thick soil cover, high organic content, well-distributed rain</li>
            <li><strong>Difference:</strong> Unlike other sections, the <span className="highlight-yellow">Shiwalik formation is ABSENT</span> here; replaced by '<span className="highlight-green">Duars</span>' (floodplains useful for tea)</li>
          </ul>
        </div>

        <div className="geo-block">
          <h4 className="sub-heading">D. Arunachal Himalayas</h4>
          <ul>
            <li><strong>Direction:</strong> Southwest to Northeast</li>
            <li><strong>Peaks:</strong> Kangtu and Namcha Barwa</li>
            <li><strong>Rivers:</strong> Dissected by fast rivers – Kameng, Subansiri, Dihang, Dibang, Lohit</li>
            <li><strong>Gorges:</strong> High hydroelectric potential</li>
            <li><strong>Population:</strong> Tribal communities – Monpa, Abor, Mishmi, Nyishi, Naga</li>
            <li><strong>Practice:</strong> <span className="highlight-pink">Jhumming</span> (Shifting cultivation)</li>
          </ul>
        </div>

        <div className="geo-block">
          <h4 className="sub-heading">E. The Eastern Hills and Mountains (Purvanchal)</h4>
          <ul>
            <li><strong>Alignment:</strong> North to South</li>
            <li><strong>Ranges:</strong> Patkai Bum (North) → Naga Hills → Manipur Hills → Mizo/Lushai Hills (South)</li>
            <li><strong>Rivers:</strong> <span className="river-text">Barak</span> river (Manipur/Mizoram)</li>
            <li><strong>Loktak Lake:</strong> In Manipur (famous for <span className="highlight-green">floating phumdis</span>)</li>
            <li><strong>Molassis Basin:</strong> Mizoram is known as this due to soft unconsolidated rocks</li>
          </ul>
        </div>
      </div>

      {/* Page 6: Northern Plains */}
      <div className="page">
        <h3 className="subsection-title">2. The Northern Plains</h3>
        <p>Formed by alluvial deposits of <span className="river-text">Indus</span>, <span className="river-text">Ganga</span>, and <span className="river-text">Brahmaputra</span> rivers</p>
        <p><strong>Size:</strong> ~3,200 km long; 150-300 km wide</p>
        <p><strong>Depth of Alluvium:</strong> 1,000–2,000 m</p>

        <div className="zone-box">
          <p style={{ textAlign: 'center', marginBottom: '10px' }}><strong>Belts/Zones (South to North)</strong></p>
          <ul>
            <li>🪨 <strong>Bhabar:</strong> 8-10 km wide belt parallel to Shiwalik foothills. Heavy rocks/boulders deposited here. <span style={{ color: '#c0392b', fontWeight: 'bold' }}>Rivers Disappear!</span></li>
            <li>🌿 <strong>Tarai:</strong> South of Bhabar (10-20 km wide). Rivers re-emerge. Creates marshy, swampy conditions. Naturally growing luxurious forests (now cleared for agriculture)</li>
            <li>🧱 <strong>Bhangar:</strong> <span className="highlight-yellow">Old Alluvium</span> (found on higher ground/terraces). Contains calcareous deposits called 'Kankar'</li>
            <li>🌾 <strong>Khadar:</strong> <span className="highlight-green">New Alluvium</span> (flood plains). <strong>Very Fertile!</strong></li>
          </ul>
        </div>

        <p><strong>Features:</strong> Sand bars, meanders, oxbow lakes, braided channels (especially Brahmaputra)</p>
        <p><strong>Riverine Islands:</strong> Common in Brahmaputra (e.g., <span className="highlight-pink">Majuli</span>)</p>
      </div>

      {/* Page 7: Peninsular Plateau */}
      <div className="page">
        <h3 className="subsection-title">3. The Peninsular Plateau</h3>
        <p><strong>Shape:</strong> Irregular triangle | <strong>Height:</strong> 600-900m | <strong>Slope:</strong> West → East (indicated by river flow)</p>
        <p><strong>General Features:</strong> Tors, block mountains, rift valleys, spurs, bare rocky structures, wall-like dykes</p>
        <p><strong>Soil:</strong> Black soil in western/northwestern parts</p>

        <h4 className="sub-heading">Sub-Divisions of the Plateau:</h4>
        
        <p><strong>A. The Deccan Plateau</strong></p>
        <p><strong>Borders:</strong> Western Ghats (West), Eastern Ghats (East), Satpura/Maikal/Mahadeo (North)</p>

        <table className="hand-table">
          <thead>
            <tr>
              <th>Western Ghats (Sahyadri)</th>
              <th>Eastern Ghats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li><strong>Continuous</strong> (can only be crossed via passes)</li>
                  <li>Higher elevation (Avg 1,500m)</li>
                  <li>Height increases North → South</li>
                  <li><span className="highlight-pink">Anaimudi</span> (2,695m) – <strong>Highest in Peninsular India!</strong></li>
                  <li>Dodabetta (2,637m)</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li><strong>Discontinuous</strong> and irregular (eroded by rivers)</li>
                  <li>Lower elevation</li>
                  <li>Rivers: Mahanadi, Godavari, Krishna, Kaveri</li>
                  <li>Ranges: Javadi, Palconda, Nallamala, Mahendragiri</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: 'center' }}><strong>Meeting Point:</strong> Western & Eastern Ghats meet at <span className="highlight-green">Nilgiri Hills</span></p>
      </div>

      {/* Page 8: Central Highlands & NE Plateau */}
      <div className="page">
        <div className="sketch-box">
          <h4 className="sub-heading">B. The Central Highlands</h4>
          <ul>
            <li><strong>Location:</strong> Bounded by Aravali (West) and Satpura (South)</li>
            <li><strong>Elevation:</strong> 700–1,000m</li>
            <li><strong>Metamorphic History:</strong> Presence of marble, slate, gneiss</li>
            <li><strong>Rivers:</strong> Tributaries of Yamuna (Chambal, Sind, Betwa, Ken) flow NE</li>
            <li><em>Note:</em> <span className="highlight-yellow">Banas</span> is the only significant tributary of Chambal from the West (Aravali)</li>
            <li><strong>Eastern Extension:</strong> Rajmahal Hills</li>
          </ul>

          <h4 className="sub-heading">C. The Northeastern Plateau</h4>
          <ul>
            <li><strong>Origin:</strong> Extension of the main Peninsular block</li>
            <li><strong>Separation:</strong> A huge fault (depression) was created between Rajmahal hills & Meghalaya plateau during Himalayan formation → Later filled by sediments</li>
            <li><strong>Divisions:</strong> 
              <br />1. The Meghalaya Plateau (Garo, Khasi, Jaintia Hills)
              <br />2. Karbi Anglong (Assam)
            </li>
            <li><strong>Resources:</strong> Rich in coal, iron ore, sillimanite, uranium</li>
            <li><strong>Rainfall:</strong> Maximum rainfall at <span className="highlight-green">Cherrapunji/Mawsynram</span> → Result: Highly eroded surface, bare rock</li>
          </ul>
        </div>
      </div>

      {/* Page 9: Indian Desert */}
      <div className="page">
        <div className="info-box">
          <h3 className="subsection-title">4. The Indian Desert</h3>
          <ul>
            <li><strong>Location:</strong> Northwest of Aravali Hills</li>
            <li><strong>Topography:</strong> Undulating; longitudinal dunes and <span className="highlight-yellow">Barchans</span> (crescent-shaped dunes)</li>
            <li><strong>Climate:</strong> Low rainfall (&lt;150 mm/year), Arid, low vegetation</li>
            <li><strong>Geological History:</strong> Known as <em>Marusthali</em>. Believed to be under the sea during the <span className="highlight-pink">Mesozoic era</span> (Evidence: Marine fossils at Aakal Wood Fossil Park, Jaisalmer – 180 million years old)</li>
            <li><strong>Rivers:</strong> Ephemeral (short-lived). <span className="river-text">Luni</span> is the only significant river</li>
            <li><strong>Lakes:</strong> Brackish lakes (plasas) are common (source of salt). Inland drainage</li>
          </ul>
        </div>
      </div>

      {/* Page 10: Coastal Plains */}
      <div className="page">
        <h3 className="subsection-title">5. The Coastal Plains</h3>

        <div className="geo-block">
          <h4 className="sub-heading">A. Western Coastal Plains</h4>
          <ul>
            <li><strong>Nature:</strong> <span className="highlight-green">Submerged</span> coastal plain</li>
            <li><strong>Width:</strong> Narrow belt</li>
            <li><strong>Significance:</strong> Natural conditions for <strong>ports and harbours</strong> (e.g., Kandla, Mazagaon, Cochin)</li>
            <li><strong>Divisions:</strong>
              <br />– Kachchh & Kathiawar (Gujarat)
              <br />– Konkan (Maharashtra)
              <br />– Goan (Karnataka)
              <br />– Malabar (Kerala)
            </li>
            <li><strong>Kayals (Backwaters):</strong> Distinct feature of Malabar coast. Used for fishing and inland navigation. Famous for <span className="highlight-pink">Nehru Trophy Vallamkali (Boat Race)</span> in Punnamada Kayal</li>
          </ul>
        </div>

        <div className="geo-block">
          <h4 className="sub-heading">B. Eastern Coastal Plains</h4>
          <ul>
            <li><strong>Nature:</strong> <span className="highlight-yellow">Emergent</span> coast</li>
            <li><strong>Width:</strong> Broader</li>
            <li><strong>Ports:</strong> Difficult to develop natural ports because the continental shelf extends up to 500 km into the sea</li>
            <li><strong>Deltas:</strong> Well-developed deltas by <span className="river-text">Mahanadi</span>, <span className="river-text">Godavari</span>, <span className="river-text">Krishna</span>, <span className="river-text">Kaveri</span></li>
          </ul>
        </div>
      </div>

      {/* Page 11: Islands */}
      <div className="page">
        <h3 className="subsection-title">6. The Islands</h3>

        <div className="geo-block">
          <h4 className="sub-heading">A. Bay of Bengal (Andaman & Nicobar)</h4>
          <ul>
            <li><strong>Count:</strong> ~572 islands/islets</li>
            <li><strong>Coordinates:</strong> 6°N – 14°N lat; 92°E – 94°E long</li>
            <li><strong>Groups:</strong> Ritchie's Archipelago and Labyrinth Island</li>
            <li><strong>Division:</strong> <span className="highlight-yellow">Ten Degree Channel</span> separates Andaman (North) from Nicobar (South)</li>
            <li><strong>Origin:</strong> Continuation of submarine mountains (Arakan Yoma). Some are volcanic</li>
            <li><strong>Barren Island:</strong> India's <span className="highlight-pink">only active volcano</span> (in Nicobar group)</li>
            <li><strong>Highest Peak:</strong> <span className="highlight-green">Saddle Peak</span> (738 m) in North Andaman</li>
            <li><strong>Climate:</strong> Equatorial climate, convectional rain, thick forests</li>
          </ul>
        </div>

        <div className="geo-block">
          <h4 className="sub-heading">B. Arabian Sea (Lakshadweep)</h4>
          <ul>
            <li><strong>Count:</strong> 36 islands (11 inhabited)</li>
            <li><strong>Coordinates:</strong> 8°N – 12°N lat; 71°E – 74°E long</li>
            <li><strong>Origin:</strong> Built of <span className="highlight-pink">Coral deposits</span></li>
            <li><strong>Largest Island:</strong> Minicoy (453 sq km)</li>
            <li><strong>Capital:</strong> Kavaratti</li>
            <li><strong>Channels:</strong>
              <br />– <span className="highlight-yellow">9 Degree Channel:</span> Separates Minicoy from the main archipelago
              <br />– <em>Note:</em> The entire group is broadly divided by the 11-degree channel (North: Amini Island, South: Cannanore Island)
            </li>
            <li><strong>Beaches:</strong> Storm beaches with pebbles/shingles</li>
          </ul>
        </div>
      </div>

      {/* Page 12: Exam Cheat Sheet */}
      <div className="page">
        <div className="sketch-box" style={{ background: 'rgba(255, 247, 64, 0.15)', borderColor: '#f1c40f' }}>
          <h3 className="subsection-title" style={{ background: 'var(--highlighter-yellow)' }}>📌 IMPORTANT GEOGRAPHICAL TERMS FOR EXAMS</h3>
          <ul>
            <li><strong>Barchans:</strong> Crescent-shaped sand dunes (Desert)</li>
            <li><strong>Kayals:</strong> Backwaters found in Kerala</li>
            <li><strong>Karewas:</strong> Glacial clay deposits in Kashmir (Saffron)</li>
            <li><strong>Molassis Basin:</strong> Soft rock basin in Mizoram</li>
            <li><strong>Duars:</strong> Floodplains in Eastern Himalayas (Tea)</li>
            <li><strong>Duns:</strong> Longitudinal valleys (Himachal/Uttarakhand)</li>
            <li><strong>Bugyals:</strong> Summer grasslands (Bhotia tribes migrate here)</li>
            <li><strong>Phumdis:</strong> Floating vegetation (Loktak Lake, Manipur)</li>
          </ul>
        </div>
      </div>

      {/* Page 13: Key Comparisons */}
      <div className="page">
        <h3 className="subsection-title">Key Comparisons for Exams:</h3>

        <table className="hand-table">
          <thead>
            <tr>
              <th>Bhabar</th>
              <th>Khadar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rocky, porous belt near Shiwalik foothills</td>
              <td>New alluvium on flood plains</td>
            </tr>
            <tr>
              <td>Rivers <strong>disappear</strong> in this zone</td>
              <td><strong>Very fertile</strong> soil</td>
            </tr>
          </tbody>
        </table>

        <table className="hand-table">
          <thead>
            <tr>
              <th>Western Ghats</th>
              <th>Eastern Ghats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Continuous, Higher (Avg 1500m)</td>
              <td>Discontinuous, Lower</td>
            </tr>
            <tr>
              <td>Anaimudi (2,695m) – Highest Peak</td>
              <td>Eroded by rivers (Mahanadi, Godavari, etc.)</td>
            </tr>
          </tbody>
        </table>

        <table className="hand-table">
          <thead>
            <tr>
              <th>Western Coastal Plain</th>
              <th>Eastern Coastal Plain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Submerged, Narrow</td>
              <td>Emergent, Broader</td>
            </tr>
            <tr>
              <td>Good for natural ports & harbours</td>
              <td>Well-developed deltas</td>
            </tr>
          </tbody>
        </table>

        <p style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Patrick Hand', color: '#95a5a6', fontSize: '1.3rem' }}>
          ~ End of Notes ~
        </p>
      </div>
    </div>
  );
}
