import * as d3 from 'https://cdn.skypack.dev/d3@7';
import tippy from 'https://unpkg.com/tippy.js@6/dist/tippy.esm.min.js';

/**
 * Inicjalizuje drzewo życia w kontenerze.
 * @param {Object} data – hierarchiczna struktura
 * @param {string} containerId – id div# dla SVG
 * @param {string} checkboxContainerId – id div# dla checkboxów
 */
export function initTree(data, containerId, checkboxContainerId) {
  const width = 300, height = 400;
  const svg = d3.select(`#${containerId}`)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const root = d3.hierarchy(data);
  d3.tree().size([height, width - 40])(root);

  const g = svg.append('g').attr('transform', 'translate(20,0)');

  // Linki
  g.selectAll('path')
    .data(root.links())
    .join('path')
      .attr('d', d3.linkHorizontal().x(d => d.y).y(d => d.x))
      .attr('stroke', '#888')
      .attr('fill', 'none');

  // Checkboxy + węzły
  const cbContainer = document.getElementById(checkboxContainerId);
  root.descendants().forEach(node => {
    // checkbox
    const label = document.createElement('label');
    label.innerHTML = `<input type=\"checkbox\" value=\"${node.data.name}\"/> ${node.data.name}`;
    cbContainer.appendChild(label);

    // circle
    g.append('circle')
      .attr('cx', node.y)
      .attr('cy', node.x)
      .attr('r', 6)
      .style('cursor', 'pointer')
      .attr('data-tippy-content', node.data.name)
      .on('click', () => {
        const cb = cbContainer.querySelector(`input[value='${node.data.name}']`);
        cb.checked = !cb.checked;
      });
  });

  // Tooltipy
  tippy('[data-tippy-content]');
}
