'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">barber-manager-desk documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-293a80f64190c85220081a645a730e40"' : 'data-target="#xs-components-links-module-AppModule-293a80f64190c85220081a645a730e40"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-293a80f64190c85220081a645a730e40"' :
                                            'id="xs-components-links-module-AppModule-293a80f64190c85220081a645a730e40"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogBorrarImgComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogBorrarImgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DivPeluExpansionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DivPeluExpansionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioPeluqueriaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InicioPeluqueriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavPeluqueriaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavPeluqueriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavPeluqueroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavPeluqueroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeluqueriaInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeluqueriaInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeluqueriaPelusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeluqueriaPelusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeluqueroCitasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeluqueroCitasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeluqueroFotosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeluqueroFotosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeluqueroInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeluqueroInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeluqueroResenasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeluqueroResenasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrincipalPeluqueriaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrincipalPeluqueriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WinAuntenticaPeluComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WinAuntenticaPeluComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WinOpcionInsertarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WinOpcionInsertarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WinPeluqueriaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WinPeluqueriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WinPeluqueroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WinPeluqueroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WinSubirFotoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WinSubirFotoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link">AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuntenticadorJWTService.html" data-type="entity-link">AuntenticadorJWTService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioCitasService.html" data-type="entity-link">ServicioCitasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioEstablecimientosService.html" data-type="entity-link">ServicioEstablecimientosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioFotoService.html" data-type="entity-link">ServicioFotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioPeluquerosService.html" data-type="entity-link">ServicioPeluquerosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioResenasService.html" data-type="entity-link">ServicioResenasService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpInterceptorService.html" data-type="entity-link">HttpInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cita.html" data-type="entity-link">Cita</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CitaPelu.html" data-type="entity-link">CitaPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogDataFoto.html" data-type="entity-link">DialogDataFoto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Establecimiento.html" data-type="entity-link">Establecimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EstablecimientoBuscador.html" data-type="entity-link">EstablecimientoBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EstablecimientoMin.html" data-type="entity-link">EstablecimientoMin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Foto.html" data-type="entity-link">Foto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaCitas.html" data-type="entity-link">ListaCitas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaCitasPelu.html" data-type="entity-link">ListaCitasPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaEstablecimientosBuscador.html" data-type="entity-link">ListaEstablecimientosBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaFoto.html" data-type="entity-link">ListaFoto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaPeluqueroBuscador.html" data-type="entity-link">ListaPeluqueroBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaResenaPelu.html" data-type="entity-link">ListaResenaPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaResenas.html" data-type="entity-link">ListaResenas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Peluquero.html" data-type="entity-link">Peluquero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeluqueroBuscador.html" data-type="entity-link">PeluqueroBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeluqueroMin.html" data-type="entity-link">PeluqueroMin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Resena.html" data-type="entity-link">Resena</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResenaPelu.html" data-type="entity-link">ResenaPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WinDataPelu.html" data-type="entity-link">WinDataPelu</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});