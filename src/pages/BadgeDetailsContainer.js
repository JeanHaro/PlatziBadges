import React from 'react';

// Importando componentes
import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';


class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        // Como es true or false, se pasa acá en el estado
        modalIsOpen: false,
    }

    // Traemos los datos cuando el component esté listo
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            // Obtenemos el id
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            // Si encuentra esos datos, el loading deja de buscar
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    // Para abrir y cerrar el modal
    handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false });
    }

    // Para eliminar los badges
    // Remove - parametro(id del badge)
    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null });

        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            )
            this.setState({ loading:false })

            // Para llevarnos a la lista de badges cuando eliminemos
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading:false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        const badge = this.state.data;

        return (
            <BadgeDetails 
                badge={this.state.data} 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                >
            </BadgeDetails>
        )
    }
}

export default BadgeDetailsContainer;