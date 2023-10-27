<template>
    <div class="footer-attach">
        <router-link to="/" class="search-tab">
            <div class="inside">
                <i class="fas fa-search"></i>
            </div>
        </router-link>
        <div class="d-flex justify-content-center">
            <div class="row w-100">
                <div class="col-md-8 offset-md-2">
                    <div class="row">
                        <div class="col-6 text-center bottom-menu pt-3">
                            <router-link to="/lists" class="text-white">
                                <i class="fas fa-list"></i>
                                <p>
                                    Lists
                                </p>
                            </router-link>
                        </div>
                        <div class="col-6 text-center bottom-menu pt-3">
                            <router-link to="/info" class="text-white">
                                <i class="fas fa-info"></i>
                                <p>
                                    Info
                                </p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>