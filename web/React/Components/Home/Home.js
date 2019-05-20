const { Component } = React;

function Home(props) {
    var Cate = ['Ciencias', 'Tecnología', 'Economía', 'Humanidad', 'Naturaleza', 'Cultura', 'Turismo']
    return (
        <div class="hero is-fullheight">
            <div class="hero-head">
                <NavBar props={props} />
            </div>
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-3 is-hidden-mobile" style={{ height: '84.5%' }}>
                        <div class="card has-text-centered is-fullwidth" >
                            <nav class="panel is-paddingless">
                                <p class="panel-heading gradient has-text-white">Categorias</p>
                                <div class="panel-block">
                                    <div class="field has-addons">
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Buscar" />
                                        </div>
                                        <div class="control">
                                            <a class="button is-info">
                                                Buscar
                                    </a>
                                        </div>
                                    </div>
                                </div>
                                {
                                    Cate.map((item, i) => {
                                        return (
                                            <a class="panel-block is-active">
                                                <span class="panel-icon">
                                                    <i class="fas fa-book" aria-hidden="true"></i>
                                                </span>
                                                {item}
                                            </a>
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    </div>
                    <div class="column is-fullheight Scroll User">
                        <p class="is-size-4 has-text-link">Ultimos Añadidos</p>
                        <br />
                        {
                            Cate.map((item, i) => {
                                return (
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-64x64">
                                                <img src="http://www.iconarchive.com/download/i60041/mattahan/ultrabuuf/Comics-Spiderman-Cam.ico" />
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <strong>Este Articulo es de ciencia</strong> <small>@Fernando Araujo</small>
                                                    <br />
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                                                        </p>
                                            </div>
                                            <nav class="level is-mobile">
                                                <div class="level-left">
                                                    <a class="level-item">
                                                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                                    </a>
                                                    <a class="level-item">
                                                        <span class="icon is-small"><i class="fas fa-download"></i></span>
                                                    </a>
                                                    <a class="level-item">
                                                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}